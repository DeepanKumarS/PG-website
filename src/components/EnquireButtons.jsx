import { site } from "../config/site";

// Reusable WhatsApp + Call buttons. Pass in the room title for a pre-filled message.
export default function EnquireButtons({ roomTitle }) {
  const message = `Hi ${site.brandName}, I'm interested in "${roomTitle}". Is it available?`;
  const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const phoneUrl = `tel:+${site.phoneNumber}`;

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 rounded-lg bg-green-600 px-6 py-3 text-center font-semibold text-white hover:bg-green-700"
      >
        WhatsApp Enquiry
      </a>
      <a
        href={phoneUrl}
        className="flex-1 rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
      >
        Call Now
      </a>
    </div>
  );
}