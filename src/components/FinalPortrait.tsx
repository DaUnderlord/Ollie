import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { birthdayData } from "../data/birthday";
import { prefersReducedMotion } from "../lib/motion";
import { PhotoPicture } from "./PhotoPicture";

gsap.registerPlugin(ScrollTrigger);

export function FinalPortrait() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const photo = birthdayData.photos[5];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const frame = frameRef.current;
      const inner = innerRef.current;
      if (!frame || !inner) return;

      if (prefersReducedMotion()) return;

      gsap.set(frame, { clipPath: "inset(10% 10% 10% 10%)", opacity: 0.4 });
      gsap.set(inner, { scale: 1.05 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.7,
          },
        })
        .to(frame, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.55, ease: "none" }, 0)
        .to(inner, { scale: 1, duration: 0.6, ease: "none" }, 0);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="chapter-06"
      ref={sectionRef}
      className="relative h-[130vh] bg-charcoal-deep sm:h-[150vh]"
      aria-label="Chapter 06"
    >
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center px-4 pt-14 pb-8 sm:px-5 sm:pt-16">
        <p className="meta absolute left-4 top-[max(1.5rem,env(safe-area-inset-top))] text-silver-dim sm:left-8 lg:left-16">
          06
        </p>
        <div
          ref={frameRef}
          className="relative h-[min(68vh,640px)] w-full max-w-[520px] overflow-hidden sm:h-[72vh] lg:h-[78vh] lg:max-w-[560px]"
        >
          <div ref={innerRef} className="h-full w-full will-change-transform">
            <PhotoPicture
              id={photo.id}
              alt={photo.alt}
              objectPosition={photo.objectPosition}
              sizes={photo.sizes}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
