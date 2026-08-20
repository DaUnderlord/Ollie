import { birthdayData } from "../data/birthday";
import { PhotoPicture } from "./PhotoPicture";
import { PhotoReveal } from "./PhotoReveal";

export function WarmIcon() {
  const photo = birthdayData.photos[4];
  const her = birthdayData.chapters.her;

  return (
    <section
      id="chapter-05"
      className="relative bg-amber px-5 py-24 sm:px-10 lg:px-16 lg:py-32"
      aria-label="Chapter 05"
    >
      <div className="mx-auto flex max-w-[1600px] flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        <div className="lg:w-[32%] lg:pb-10">
          <p className="meta text-ivory/70">05 — {her.label}</p>
          <h2 className="display mt-8 text-[clamp(4rem,10vw,8.5rem)] text-ivory">
            {birthdayData.name}
          </h2>
          <p className="display mt-6 max-w-[14ch] text-[clamp(1.5rem,3vw,2.25rem)] italic leading-snug text-ivory/80">
            {her.caption}
          </p>
        </div>
        <PhotoReveal className="aspect-[4/5] w-full lg:w-[58%]">
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
