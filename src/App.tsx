import { OpeningHero } from "./components/OpeningHero";
import { LightStill } from "./components/LightStill";
import { LightJoy } from "./components/LightJoy";
import { WorldTransition } from "./components/WorldTransition";
import { WarmArrival } from "./components/WarmArrival";
import { WarmIcon } from "./components/WarmIcon";
import { FinalPortrait } from "./components/FinalPortrait";
import { FinalMessage } from "./components/FinalMessage";
import { ProgressIndicator } from "./components/ProgressIndicator";
import { CustomCursor } from "./components/CustomCursor";
import { SmoothScroll } from "./components/SmoothScroll";

export default function App() {
  return (
    <SmoothScroll>
      <a
        href="#opening"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-charcoal focus:px-4 focus:py-2 focus:text-silver-bright"
      >
        Skip to content
      </a>
      <CustomCursor />
      <ProgressIndicator />
      <main>
        <OpeningHero />
        <LightStill />
        <LightJoy />
        <WorldTransition />
        <WarmArrival />
        <WarmIcon />
        <FinalPortrait />
        <FinalMessage />
      </main>
    </SmoothScroll>
  );
}
