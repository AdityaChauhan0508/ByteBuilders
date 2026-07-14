# Pabbly Form Setup

This project posts the contact form to a Pabbly webhook and then appends each submission into your Google Sheet.

## Sheet columns

Use the first row exactly like this:

- A: Name
- B: Business Name
- C: Phone no.
- D: Message
- E: Date
- F: time

## Pabbly workflow

In Pabbly, create a workflow with these steps:

1. Trigger: `Webhook`
2. Copy the webhook URL Pabbly gives you
3. Action: `Google Sheets > Add New Row`
4. Map the incoming fields to your sheet columns
5. Turn the workflow on

## Payload sent by the form

The form sends this JSON payload to Pabbly:

```json
{
  "name": "Priya Sharma",
  "business": "Bloom Hair Studio",
  "phone": "+91 98xxxxxx",
  "message": "Tell us about your business...",
  "source": "https://your-site-url.com",
  "submittedAt": "2026-07-14T12:34:56.000Z"
}
```

## Sheet columns

Use the first row exactly like this:

- A: Name
- B: Business Name
- C: Phone no.
- D: Message
- E: Date
- F: time
- G: Source
- H: submittedAt

## Connect the form

Create a file named `.env.local` in the project root and add your Pabbly webhook URL:

```bash
VITE_PABBLY_WEBHOOK_URL=https://functions.pabbly.com/api/orgs/69c62d3491a29653da9a74ff/functions/6a55f70c58222c667a00a4d8/invoke
```

Restart the dev server after adding the env file.