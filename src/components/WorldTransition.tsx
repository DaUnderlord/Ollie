import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { birthdayData } from "../data/birthday";
import { prefersReducedMotion } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

export function WorldTransition() {
  const sectionRef = useRef<HTMLElement>(null);
  const amberRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLParagraphElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (prefersReducedMotion()) {
      gsap.set(amberRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      return;
    }

    const ctx = gsap.context(() => {
      const amber = amberRef.current;
      const type = typeRef.current;
      const rule = ruleRef.current;
      if (!amber || !type || !rule) return;

      const fromBelow = window.matchMedia("(max-width: 767px)").matches;
      gsap.set(amber, {
        clipPath: fromBelow ? "inset(100% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
      });
      gsap.set(type, { opacity: 0.35, y: 16 });
      gsap.set(rule, { scaleX: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.7,
        },
      });

      tl.to(amber, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "none" }, 0)
        .to(type, { opacity: 1, y: 0, color: "#e5e7e9", duration: 0.45, ease: "none" }, 0.18)
        .to(rule, { scaleX: 1, duration: 0.4, ease: "none" }, 0.28);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[120vh] sm:h-[150vh] lg:h-[170vh] bg-ivory"
      aria-label="World transition"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <div ref={amberRef} className="absolute inset-0 bg-amber" />
        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <p
            ref={typeRef}
            className="display text-[clamp(2.25rem,12vw,8rem)] text-charcoal/40"
          >
            {birthdayData.chapters.then.label}
          </p>
          <div
            ref={ruleRef}
            className="mt-8 h-px w-24 origin-center bg-silver-bright"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
