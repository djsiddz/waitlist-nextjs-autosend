'use server'
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { demoRequestReceivedNotifyCEO, demoRequestReceivedNotifyUser } from '@/lib/email-templates';

const schema = z.object({
  email: z.email({
    error: 'Invalid Email',
  }),
  name: z.string({
    error: 'Invalid Name',
  })
});

const AUTOSEND_API_URL = 'https://api.autosend.com/v1/mails/send';


export async function submitDemoRequestForm(initialState: any, formData: FormData) {
  // Step 0: Get ENV details
  const apiKey = process.env.AUTOSEND_API_KEY;
  const testEnv = process.env.TEST_ENV; //true for Dev or false for Production
  if (!apiKey) {
    throw new Error('AUTOSEND_API_KEY is not set in environment variables');
  }

  // Step 1: Validate the form data
  const rawFormData = Object.fromEntries(formData);
  const validatedFields = schema.safeParse({
    email: rawFormData['email'],
    name: rawFormData['name'],
  })
  // Return early if the form data is invalid
  if (!validatedFields.success) {
    return {
      status: 400,
      errors: z.prettifyError(validatedFields.error),
    }
  }
  console.log("Ready to send email to CEO...");
  // Step 2: Send email to yourself when the Request Demo form is submitted
  let emailErrors: Record<string, string[]> = {};

  try {
    const ceoEmailResponse = await fetch(AUTOSEND_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: {
          email: "formsubmissions@ticktoes.com",
          name: "TickToes",
        },
        to: {
          email: "ceo@ticktoes.com",
          name: "CEO, TickToes",
        },
        subject: "Someone joined TickToes Waitlist 🥳",
        // Option 1: If you save your email templates on AutoSend, you can use the templateId here
        // templateId: "your_template_id",
        // Option 2: Send using raw HTML
        html: demoRequestReceivedNotifyCEO(),
        dynamicData: {
          name: validatedFields.data.name,
          email: validatedFields.data.email,
        },
        test: testEnv === 'true' // You can remove this completely in production, a nice utility given by AutoSend
      }),
    });

    const ceoEmailData = await ceoEmailResponse.json();

    if (!ceoEmailResponse.ok || !ceoEmailData.success) {
      const errorMessage = ceoEmailData.message || `AutoSend API request failed with status ${ceoEmailData.statusCode || ceoEmailResponse.status}`;
      console.error('AutoSend API Error (CEO email):', ceoEmailData);
      emailErrors._form = emailErrors._form || [];
      emailErrors._form.push(`Failed to send notification email: ${errorMessage}`);
    } else {
      console.log("Email sent to CEO successfully: ", ceoEmailData);
      console.log("Ready to send email to user...");
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred while sending CEO notification email';
    console.error('AutoSend API Error (CEO email):', error);
    emailErrors._form = emailErrors._form || [];
    emailErrors._form.push(`Failed to send notification email: ${errorMessage}`);
  }

  // Step 3: Trigger additional email to the user confirming the request has been received
  // Only attempt if CEO email was successful (no errors so far)
  if (Object.keys(emailErrors).length === 0) {
    try {
      const userEmailResponse = await fetch(AUTOSEND_API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: {
            email: "ceo@ticktoes.com",
            name: "CEO, TickToes",
          },
          to: {
            email: validatedFields.data.email,
            name: validatedFields.data.name,
          },
          subject: "You're on the waitlist for TickToes 🎉",
          // Option 1: If you save your email templates on AutoSend, you can use the templateId here
          // templateId: "your_template_id",
          // Option 2: Send using raw HTML
          html: demoRequestReceivedNotifyUser(),
          dynamicData: {
            name: validatedFields.data.name,
            email: validatedFields.data.email,
          },
          test: testEnv === 'true'
        }),
      });

      const userEmailData = await userEmailResponse.json();

      if (!userEmailResponse.ok || !userEmailData.success) {
        const errorMessage = userEmailData.message || `AutoSend API request failed with status ${userEmailData.statusCode || userEmailResponse.status}`;
        console.error('AutoSend API Error (User email):', userEmailData);
        emailErrors._form = emailErrors._form || [];
        emailErrors._form.push(`Failed to send confirmation email: ${errorMessage}`);
      } else {
        console.log("Email sent to user successfully: ", userEmailData);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred while sending user confirmation email';
      console.error("Error sending email (User email):", error);
      emailErrors._form = emailErrors._form || [];
      emailErrors._form.push(`Failed to send confirmation email: ${errorMessage}`);
    }
  }

  // Return errors if any occurred during email sending
  if (Object.keys(emailErrors).length > 0) {
    return {
      errors: emailErrors,
    };
  }

  // Only redirect if there are no errors
  redirect('/signup/thank-you');
}
