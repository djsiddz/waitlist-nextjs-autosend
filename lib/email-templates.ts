export function demoRequestReceivedNotifyCEO() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>TickToes Early Access & Demo Request Received 🚨</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
        <h1 style="color: #0072e5;">New Early Access & Demo Request</h1>
        <p>Hello CEO @ TickToes,</p>
        <p>A request for early access & demo for TickToes has been received.</p>
        <p>Here are the details:</p>
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Preferred Date:</strong> {{date}}</p>
        <p><strong>Preferred Time:</strong> {{time}}</p>
        <p><strong>Queries:</strong> {{feedback}}</p>
        <p>An email will be sent to the user confirming the receipt of their demo request. <strong>Please schedule and share the meeting invite for the TickToes demo.</strong></p>
        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>Automated Form Submissions, TickToes</strong>
        </p>
      </div>
      <p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">
        This email was sent using AutoSend integration with Next.js
      </p>
    </body>
    </html>
  `;
}
export function demoRequestReceivedNotifyUser() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Confirmed! Your TickToes Early Access & Demo Request has been received 🎉</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
        <h1 style="color: #0072e5;">You're in the queue for Early Access to TickToes</h1>
        <p>Hi <strong>{{name}}</strong>,</p>
        <img src="https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/JS9ENQMH29J6dYzE.webp" alt="Welcome to TickToes" style="width: 456px; height: 342px; margin: 0 auto; display: block;">
        <p>We have received your request for early access to TickToes. We'll schedule a demo on <strong>{{date}}</strong> at <strong>{{time}}</strong>.</p>

        <p>Additional details shared by you:</p>
        <p><strong>Queries:</strong> {{feedback}}</p>

        <p>Please note, the meeting invite will be sent to your email address <strong>{{email}}</strong> shortly.</p>
        <p>If you have any questions, <strong>please feel free to reply to this email.</strong> We'll get back to you as soon as possible :)</p>

        <p>Looking forward to having you on the call.</p>

        <p style="margin-top: 30px;">
          Best regards,<br>
          <strong>CEO, TickToes</strong>
        </p>
      </div>
      <p style="font-size: 12px; color: #666; margin-top: 20px; text-align: center;">
        This email was sent using AutoSend integration with Next.js
      </p>
    </body>
    </html>
  `;
}
