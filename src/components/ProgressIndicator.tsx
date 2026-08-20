import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { birthdayData } from "../data/birthday";

gsap.registerPlugin(ScrollTrigger);

export function ProgressIndicator() {
  const [index, setIndex] = useState(0);
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const triggers: ScrollTrigger[] = [];

    triggers.push(
      ScrollTrigger.create({
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (lineRef.current) {
            lineRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      }),
    );

    birthdayData.photos.forEach((photo, i) => {
      const id = i === 0 ? "opening" : `chapter-${photo.id}`;
      const el = document.getElementById(id);
      if (!el) return;
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 45%",
          end: "bottom 45%",
          onEnter: () => setIndex(i),
          onEnterBack: () => setIndex(i),
        }),
      );
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  const current = birthdayData.photos[index]?.id ?? "01";

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-40 mix-blend-difference">
      <div className="h-px w-full bg-white/15">
        <div
          ref={lineRef}
          className="progress-line h-px w-full origin-left bg-silver-bright"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-8 sm:py-4">
        <p className="meta text-[0.625rem] text-silver-bright">{birthdayData.intimateName}</p>
        <p className="meta text-[0.625rem] text-silver-bright">
          {current} / 06
        </p>
      </div>
    </div>
  );
}
