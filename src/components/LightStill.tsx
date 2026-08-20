import { birthdayData } from "../data/birthday";
import { PhotoPicture } from "./PhotoPicture";
import { PhotoReveal } from "./PhotoReveal";

export function LightStill() {
  const photo = birthdayData.photos[1];
  const still = birthdayData.chapters.still;

  return (
    <section
      id="chapter-02"
      className="relative bg-ivory px-5 py-24 text-charcoal sm:px-10 lg:px-16 lg:py-32"
      aria-label="Chapter 02"
    >
      <div className="mx-auto grid max-w-[1600px] items-end gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
        <div className="order-2 lg:order-1 lg:pb-8">
          <p className="meta text-silver-dim">02 — {still.label}</p>
          <h2 className="display mt-8 text-[clamp(2.75rem,7vw,6.5rem)] text-charcoal">
            {still.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
        </div>

        <PhotoReveal className="order-1 aspect-[4/5] w-full lg:order-2 lg:aspect-[4/5]">
          <PhotoPicture
            id={photo.id}
            alt={photo.alt}
            objectPosition={photo.objectPosition}
            sizes={photo.sizes}
          />
        </PhotoReveal>
      </div>
    </section>
  );
}
