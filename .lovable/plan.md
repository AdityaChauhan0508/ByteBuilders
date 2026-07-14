Implement a reliable WhatsApp redirect for ByteBuilders.

Changes to make:
1. Replace the placeholder WhatsApp number everywhere with `+91 9873316546`.
2. Add the prefilled message:
   `Hi! I saw your website and I'd like to know more about your packages.`
3. Use the WhatsApp click-to-chat URL format consistently across:
   - Hero CTA button
   - Contact section CTA button
   - Floating WhatsApp button
   - Footer WhatsApp social/contact link if present
4. Prefer `https://wa.me/919873316546?text=...` instead of the `api.whatsapp.com/send` URL shown in the screenshot, because it is the standard click-to-chat link and usually redirects more cleanly to WhatsApp Web/app.
5. Keep links opening in a new tab and leave the site’s design/layout unchanged.

Technical details:
- Create or use a shared encoded WhatsApp URL constant so every button stays in sync.
- URL-encode the prefilled message.
- No Twilio or backend is needed because this is visitor click-to-chat, not automated WhatsApp messaging.