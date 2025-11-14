export function demoRequestReceivedNotifyCEO() {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Someone joined the TickToes Waitlist 🥳</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
        <h1 style="color: #0072e5;">New Member on the waitlist</h1>
        <p>Hello,</p>
        <p>A new member has appeared on the TickToes Waitlist!</p>
        <p>Here are the details:</p>
        <p><strong>Name:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p>An email will be sent to the user confirming their position on the waitlist shortly.</p>
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
      <title>You're on the waitlist for TickToes 🎉</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background-color: #f4f4f4; padding: 20px; border-radius: 10px;">
        <h1 style="color: #0072e5;">Early Access to TickToes soon</h1>
        <p>Hi <strong>{{name}}</strong>,</p>
        <img src="https://ouch-prod-var-cdn.icons8.com/bu/illustrations/previews/JS9ENQMH29J6dYzE.webp" alt="Welcome to TickToes" style="width: 100%; height: auto; margin: 0 auto; display: block;">
        <p>We have received your request and you're on the TickToes waitlist. We'll send you weekly updates as we get ready to welcome you to TickToes!</p>
        <p>If you have any questions, <strong>please feel free to reply to this email.</strong> We'll get back to you as soon as possible :)</p>
        <p>Stay curious!</p>
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
