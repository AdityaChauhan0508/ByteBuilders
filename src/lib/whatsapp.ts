const WHATSAPP_PHONE_NUMBER = "918368818668";
const WHATSAPP_MESSAGE =
  "Hi! I saw your website and I'd like to know more about your packages.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
