import { useState } from "react";

export default function ImageGallery({ images = [], title }) {
  const [current, setCurrent] = useState(0); // index of the shown image

  // No images? Show a placeholder.
  if (images.length === 0) {
    return (
      <div className="grid aspect-[4/3] place-items-center rounded-2xl bg-slate-100 text-slate-400">
        No image
      </div>
    );
  }

  return (
    <div>
      {/* Main (big) image */}
      <div className="overflow-hidden rounded-2xl bg-slate-100">
        <img
          src={images[current]}
          alt={`${title} photo ${current + 1}`}
          className="aspect-[4/3] w-full object-cover"
        />
      </div>

      {/* Thumbnails — only shown if there's more than one image */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-2">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-16 w-16 overflow-hidden rounded-lg ring-2 transition ${
                index === current ? "ring-blue-600" : "ring-transparent hover:ring-slate-300"
              }`}
            >
              <img src={img} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}