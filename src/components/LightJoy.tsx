import { birthdayData } from "../data/birthday";
import { PhotoPicture } from "./PhotoPicture";
import { PhotoReveal } from "./PhotoReveal";

export function LightJoy() {
  const photo = birthdayData.photos[2];
  const joy = birthdayData.chapters.joy;

  return (
    <section
      id="chapter-03"
      className="relative bg-ivory px-5 pb-28 pt-8 text-charcoal sm:px-10 lg:px-16 lg:pb-40 lg:pt-12"
      aria-label="Chapter 03"
    >
      <div className="mx-auto max-w-[1600px]">
        <p className="meta mb-8 text-silver-dim lg:mb-12">03 — {joy.label}</p>
        <div className="lg:flex lg:items-end lg:gap-12">
          <PhotoReveal className="aspect-[4/5] w-full lg:w-[70%] lg:aspect-[4/5]">
            <PhotoPicture
              id={photo.id}
              alt={photo.alt}
              objectPosition={photo.objectPosition}
              sizes={photo.sizes}
            />
          </PhotoReveal>
          <p className="display mt-8 max-w-[12ch] text-[clamp(2rem,4vw,3.5rem)] italic leading-[1.15] text-charcoal/80 lg:mb-6 lg:mt-0">
            {joy.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
