import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { birthdayData } from "../data/birthday";
import { prefersReducedMotion } from "../lib/motion";
import { PhotoPicture } from "./PhotoPicture";

gsap.registerPlugin(ScrollTrigger);

export function OpeningHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const imageInnerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const hintLineRef = useRef<HTMLDivElement>(null);

  const photo = birthdayData.photos[0];

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduced = prefersReducedMotion();
    const ctx = gsap.context(() => {
      const stage = stageRef.current;
      const intro = introRef.current;
      const cover = coverRef.current;
      const overlay = overlayRef.current;
      const imageWrap = imageWrapRef.current;
      const imageInner = imageInnerRef.current;
      const line = lineRef.current;
      const hintLine = hintLineRef.current;
      if (!stage || !intro || !cover || !overlay || !imageWrap || !imageInner || !line || !hintLine) {
        return;
      }

      const introBits = intro.querySelectorAll("[data-intro]");
      const coverBits = cover.querySelectorAll("[data-cover]");
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      const frameWidth = () => Math.min(window.innerWidth * 0.46, window.innerHeight * 0.72);
      const coverWidth = () => Math.min(window.innerWidth * 0.42, window.innerHeight * 0.78);

      if (desktop) {
        gsap.set(imageWrap, {
          position: "absolute",
          left: "50%",
          xPercent: -50,
          width: frameWidth(),
          height: "100%",
          top: 0,
          right: "auto",
        });
      }

      if (reduced) {
        gsap.set(imageWrap, { clipPath: "inset(0% 0% 0% 0%)" });
        gsap.set(imageInner, { scale: 1 });
        gsap.set(overlay, { opacity: 0 });
        gsap.set(cover, { opacity: 1 });
        gsap.set(stage, { backgroundColor: "#f6f5f1" });
        if (desktop) {
          gsap.set(imageWrap, { left: "7%", xPercent: 0, width: coverWidth() });
        }
        return;
      }

      gsap.set(introBits, { opacity: 0, y: 18 });
      gsap.set(line, { scaleX: 0 });
      gsap.set(hintLine, { scaleX: 0 });
      gsap.set(cover, { opacity: 0 });
      gsap.set(coverBits, { y: 28, opacity: 0 });
      gsap.set(imageWrap, { clipPath: "inset(8% 8% 8% 8%)" });
      gsap.set(imageInner, { scale: 1.045 });
      gsap.set(overlay, { opacity: 0.72 });

      const enter = gsap.timeline({ delay: 0.4 });
      enter
        .to(intro.querySelector("[data-intro='date']"), {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power2.out",
        })
        .to(line, { scaleX: 1, duration: 1.15, ease: "power3.out" }, 0.25)
        .to(
          intro.querySelector("[data-intro='phrase']"),
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          0.45,
        )
        .to(
          intro.querySelector("[data-intro='name']"),
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          1.05,
        )
        .to(
          intro.querySelector("[data-intro='hint']"),
          { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
          1.75,
        )
        .to(hintLine, { scaleX: 1, duration: 1.4, ease: "power2.out" }, 1.9);

      gsap.to(hintLine, {
        opacity: 0.3,
        duration: 1.9,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        delay: 3.4,
      });

      const scroll = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });

      scroll
        .fromTo(
          intro,
          { y: 0, opacity: 1 },
          { y: -64, opacity: 0, duration: 0.28, ease: "none", immediateRender: false },
          0.06,
        )
        .fromTo(
          overlay,
          { opacity: 0.72 },
          { opacity: 0, duration: 0.42, ease: "none", immediateRender: false },
          0.08,
        )
        .to(stage, { backgroundColor: "#f6f5f1", duration: 0.35, ease: "none" }, 0.18)
        .to(
          imageWrap,
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.48, ease: "none" },
          0.1,
        )
        .to(imageInner, { scale: 1, duration: 0.55, ease: "none" }, 0.1);

      if (desktop) {
        scroll.to(
          imageWrap,
          {
            left: "7%",
            xPercent: 0,
            width: coverWidth(),
            duration: 0.4,
            ease: "none",
          },
          0.22,
        );
      }

      scroll
        .fromTo(
          cover,
          { opacity: 0 },
          { opacity: 1, duration: 0.14, ease: "none", immediateRender: false },
          0.52,
        )
        .fromTo(
          coverBits,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.22, stagger: 0.05, ease: "none", immediateRender: false },
          0.54,
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="opening"
      ref={sectionRef}
      className="relative h-[180vh] sm:h-[220vh] lg:h-[240vh]"
      aria-label="Opening"
    >
      <div ref={stageRef} className="sticky top-0 h-svh overflow-hidden bg-charcoal-deep">
        <div ref={imageWrapRef} className="absolute inset-0 overflow-hidden lg:inset-auto">
          <div ref={imageInnerRef} className="h-full w-full will-change-transform">
            <PhotoPicture
              id={photo.id}
              alt={photo.alt}
              objectPosition={photo.objectPosition}
              sizes={photo.sizes}
              eager
              className="photo-img"
            />
          </div>
          <div
            ref={overlayRef}
            className="absolute inset-0 bg-charcoal-deep"
            aria-hidden="true"
          />
        </div>

        <div
          ref={introRef}
          className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        >
          <p data-intro="date" className="meta text-silver">
            {birthdayData.intro.eyebrow}
          </p>
          <div
            ref={lineRef}
            className="mt-7 h-px w-16 origin-center bg-silver/80"
            aria-hidden="true"
          />
          <p
            data-intro="phrase"
            className="display mt-8 max-w-[16ch] text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.15] text-silver-bright"
          >
            {birthdayData.intro.line}
            <br />
            <em className="italic">{birthdayData.intro.lineTwo}</em>
          </p>
          <h1
            data-intro="name"
            className="display mt-10 text-[clamp(3.25rem,16vw,10rem)] font-medium tracking-[-0.04em] text-silver-bright"
          >
            {birthdayData.intimateName}
          </h1>
          <div data-intro="hint" className="absolute bottom-10 flex flex-col items-center gap-3">
            <p className="meta text-silver-dim">{birthdayData.intro.scroll}</p>
            <div
              ref={hintLineRef}
              className="h-px w-10 origin-center bg-silver/70"
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          ref={coverRef}
          className="pointer-events-none absolute inset-0 z-10 px-5 py-8 sm:px-10 sm:py-10 lg:px-16"
        >
          <p data-cover className="meta text-charcoal/55">
            01
          </p>
          <div className="absolute top-[max(4.5rem,calc(env(safe-area-inset-top)+3.5rem))] right-4 max-w-[14ch] text-right sm:right-8 lg:bottom-auto lg:right-16 lg:top-1/2 lg:max-w-[18ch] lg:-translate-y-1/2">
            <p
              data-cover
              className="display text-[clamp(2.5rem,11vw,8.5rem)] text-charcoal"
            >
              {birthdayData.name}
            </p>
            <p data-cover className="meta mt-4 text-charcoal/50">
              2026
            </p>
            <p
              data-cover
              className="display mt-6 text-[clamp(1.25rem,2.4vw,2.1rem)] italic leading-snug text-charcoal/75"
            >
              {birthdayData.cover.kicker}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
