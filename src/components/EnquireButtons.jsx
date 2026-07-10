import { site } from "../config/site";

// Reusable WhatsApp + Call buttons. Pass in the room title for a pre-filled message.
export default function EnquireButtons({ roomTitle }) {
  const message = `Hi ${site.brandName}, I'm interested in "${roomTitle}". Is it available?`;
  const text = encodeURIComponent(message);

  const webUrl = `https://wa.me/${site.whatsappNumber}?text=${text}`;
  const appUrl = `whatsapp://send?phone=${site.whatsappNumber}&text=${text}`;
  const phoneUrl = `tel:+${site.phoneNumber}`;

  function openWhatsApp(e) {
    e.preventDefault();
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      // Try to open the app; if it isn't installed, fall back to the website.
      window.location.href = appUrl;
      setTimeout(() => {
        window.location.href = webUrl;
      }, 1200);
    } else {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={webUrl}
        onClick={openWhatsApp}
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