# Waitlist Starter with Next.js & AutoSend API

This is a waitlist starter project that sends emails using [AutoSend API](https://autosend.com/) in a [Next.js](https://nextjs.org/) project using [Shadcn UI](https://ui.shadcn.com/).

## 📋 Overview

This project waitlists a user by creating a Contact on AutoSend, then sends a welcome email using AutoSend:

1. **Form Submissions Internal Notification** - Automatically sent to you
2. **Form Submission User Confirmation** - Automatically sent to the user

---

## READ THE ARTICLE (Coming Soon)

For a detailed walkthrough of this setup, check out [this article](https://supersiddy.wordpress.com/). 👈

---

## 🛠️ Tech Stack

- **Runtime**: Node.js v22.16.0
- **Package Manager**: pnpm v10.20.0
- **Framework**: Next.js v16.0.1
- **React**: v19.2.0
- **Tailwind CSS**: v4
- **Zod**: v4
- **Email Service**: AutoSend (API integration)

## 📁 Project Structure

```text
request-demo-nextjs-autosend/
├── app/
│   ├── signup/
│   │   ├── thank-you/
│   │   │   └── page.tsx         # /signup/thank-you page (Success page)
│   │   ├── actions.ts           # Server Actions
│   │   └── page.tsx             # /signup page
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # / page
├── components/
│   ├── ui/                      # All UI components installed
│   │   ├── button.tsx
│   │   ├── calendar.tsx
│   │   ├── card.tsx
│   │   ├── field.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── popover.tsx
│   │   ├── radio-group.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   └── textarea.tsx
│   └── signup-form.tsx          # Sign-up form UI
├── lib/
│   ├── email-templates.ts       # Local HTML email templates
│   └── utils.ts                 # Utility functions
├── public/
│   └── logoipsum-379.svg        # Replace this with your logo
├── .env.example                 # Environment variables template
├── .gitignore
├── components.json              # Shadcn configuration file
├── eslint.config.mjs
├── next.config.ts               # Next.js configuration file
├── next-env.d.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── README.md                    # YOU ARE HERE
└── tsconfig.json                # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js v22 or higher
- AutoSend API key ([Sign-up & Get one here](https://autosend.com/))

### Use this as a starting template

1. **Use `git clone` or the "Use Template" button on GitHub**

2. **Navigate to the project directory**

    ```bash
    cd request-demo-nextjs-autosend
    ```

3. **Install dependencies**

    ```bash
    pnpm install
    ```

4. **Set up environment variables**

    Copy `.env.example` to `.env`:

    ```bash
    cp .env.example .env
    ```

    Then edit `.env` with your configuration:

    ```env
    # Environment Identifier
    TEST_ENV=true

    # AutoSend Configuration
    AUTOSEND_API_KEY=add-your-autosend-api-key-here

    # Optional: Base URL for email links
    APP_BASE_URL=http://localhost:3000
    ```

5. **Start the server**

    Development mode (with auto-reload):

    ```bash
    pnpm dev
    ```

    Production mode:

    ```bash
    pnpm start
    ```

    The server will start on `http://localhost:3000`

## 🔐 Security Notes

**For Production:**

1. **Never expose tokens in responses** - The demo returns tokens for testing purposes only
2. **Implement token expiry** - Store tokens in database with expiration timestamps
3. **Use secure token generation** - Use cryptographically secure random generators
4. **Rate limiting** - Add rate limiting to prevent abuse
5. **Email validation** - Validate email addresses before sending
6. **HTTPS only** - Always use HTTPS in production
7. **Environment variables** - Never commit `.env` file to version control

## 🐛 Troubleshooting

### AutoSend Email Not Sending

1. **Check API key**: Verify `AUTOSEND_API_KEY` in `.env`
2. **Check from email**: Ensure `AUTOSEND_FROM_EMAIL` is from a verified domain
3. **Check logs**: Check AutoSend Dashboard for more info

## 📚 Documentation References

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn UI Documentation](https://ui.shadcn.com/docs)
- [AutoSend API Reference](https://docs.autosend.com/api-reference)

## Credits

- Illustration (in the Email Template to the user) by [Pixeltrue Ouch!](https://icons8.com/illustrations/author/ARh4OKrFtdfC)

## 📄 License

MIT

## 🤝 Contributing

This is a sample project for demonstration purposes. Feel free to fork and modify for your needs, or use it as a starting point to something big!

---

Built with ❤️ to showcase using AutoSend with Next.js
