import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isFinePointer, prefersReducedMotion } from "../lib/motion";

gsap.registerPlugin(ScrollTrigger);

type PhotoRevealProps = {
  children: ReactNode;
  className?: string;
};

export function PhotoReveal({ children, className = "" }: PhotoRevealProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.set(wrap, { clipPath: "inset(8% 8% 8% 8%)" });
      gsap.set(inner, { scale: 1.06 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: wrap,
            start: "top 82%",
            once: true,
          },
        })
        .to(wrap, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.35, ease: "power3.out" }, 0)
        .to(inner, { scale: 1, duration: 1.5, ease: "power2.out" }, 0);
    }, wrap);

    if (!isFinePointer()) {
      return () => ctx.revert();
    }

    const onMove = (event: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(inner, {
        x: x * 12,
        y: y * 10,
        scale: 1.025,
        duration: 0.7,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    const onLeave = () => {
      gsap.to(inner, {
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto",
      });
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapRef} data-cursor className={`overflow-hidden ${className}`}>
      <div ref={innerRef} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
