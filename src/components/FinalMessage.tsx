import { birthdayData } from "../data/birthday";
import { useLenis } from "../lib/lenis-context";

export function FinalMessage() {
  const lenis = useLenis();
  const paragraphs = birthdayData.letter.body
    .trim()
    .split(/\n\s*\n/)
    .map((p) => p.trim());

  const replay = () => {
    if (lenis) {
      lenis.scrollTo("#opening", { duration: 2.1, easing: (t: number) => 1 - Math.pow(1 - t, 3) });
      return;
    }
    document.getElementById("opening")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-charcoal-deep px-4 py-20 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-10 sm:py-28 lg:px-16 lg:py-36"
      aria-label="Birthday letter"
    >
      <div className="mx-auto max-w-[38rem] text-center">
        <p className="meta text-silver-dim">{birthdayData.date}</p>
        <h2 className="display mt-6 text-[clamp(2.25rem,9vw,5.5rem)] leading-[1.05] text-silver-bright sm:mt-8">
          Happy Birthday,
          <br />
          {birthdayData.name}
        </h2>
        <div className="mt-14 space-y-7 text-left">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="text-[1.05rem] leading-[1.85] text-silver/90 sm:text-[1.125rem]"
            >
              {paragraph.split("\n").map((line, i, arr) => (
                <span key={line}>
                  {line}
                  {i < arr.length - 1 ? <br /> : null}
                </span>
              ))}
            </p>
          ))}
        </div>
        <p className="display mt-20 text-[clamp(1.5rem,3vw,2rem)] italic text-silver-bright">
          {birthdayData.letter.close}
        </p>
        <div className="mx-auto mt-10 h-px w-16 bg-silver/50" aria-hidden="true" />
        <button
          type="button"
          onClick={replay}
          className="meta mt-12 text-silver-dim transition-colors duration-300 hover:text-silver-bright"
        >
          {birthdayData.letter.replay}
        </button>
      </div>
    </section>
  );
}
