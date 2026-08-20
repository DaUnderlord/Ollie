import { useEffect, useRef } from "react";
import gsap from "gsap";
import { isFinePointer, prefersReducedMotion } from "../lib/motion";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinePointer() || prefersReducedMotion()) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    document.documentElement.classList.add("has-custom-cursor");

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });

    const move = (event: MouseEvent) => {
      xTo(event.clientX);
      yTo(event.clientY);
    };

    const enter = () => {
      gsap.to(cursor, { scale: 2.1, opacity: 0.9, duration: 0.3, ease: "power2.out" });
    };
    const leave = () => {
      gsap.to(cursor, { scale: 1, opacity: 0.7, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", move);
    const interactive = () =>
      Array.from(document.querySelectorAll("a, button, [data-cursor]"));
    interactive().forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      interactive().forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  if (typeof window !== "undefined" && (!isFinePointer() || prefersReducedMotion())) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-silver-bright mix-blend-difference opacity-70 md:block"
      aria-hidden="true"
    />
  );
}
