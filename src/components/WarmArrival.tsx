import { birthdayData } from "../data/birthday";
import { PhotoPicture } from "./PhotoPicture";
import { PhotoReveal } from "./PhotoReveal";

export function WarmArrival() {
  const photo = birthdayData.photos[3];
  const then = birthdayData.chapters.then;

  return (
    <section
      id="chapter-04"
      className="relative min-h-svh bg-amber"
      aria-label="Chapter 04"
    >
      <div className="relative flex min-h-svh items-stretch justify-center overflow-hidden lg:justify-start">
        <PhotoReveal className="h-svh w-full lg:ml-[8%] lg:w-[min(46vw,82vh)]">
          <PhotoPicture
            id={photo.id}
            alt={photo.alt}
            objectPosition={photo.objectPosition}
            sizes={photo.sizes}
          />
        </PhotoReveal>
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between px-5 py-8 sm:px-10 lg:px-16">
          <p className="meta text-ivory/80">04</p>
          <p className="display ml-auto max-w-[10ch] text-right text-[clamp(2.5rem,6vw,5.5rem)] italic leading-[1.05] text-ivory lg:mb-8">
            {then.line}
          </p>
        </div>
      </div>
    </section>
  );
}
