export type PhotoLayout = "cover" | "split" | "offset" | "bleed" | "icon" | "intimate";
export type PhotoWorld = "light" | "warm" | "dark";

export type Photo = {
  id: "01" | "02" | "03" | "04" | "05" | "06";
  world: PhotoWorld;
  layout: PhotoLayout;
  chapter: string;
  title: string;
  caption: string;
  objectPosition: string;
  alt: string;
  sizes: string;
};

export const birthdayData = {
  name: "Yinka",
  intimateName: "Ollie",
  dateShort: "AUGUST 21",
  date: "AUGUST 21, 2026",

  intro: {
    eyebrow: "AUGUST 21",
    line: "A little something",
    lineTwo: "for someone special.",
    scroll: "SCROLL TO BEGIN",
  },

  cover: {
    kicker: "A celebration of you.",
  },

  chapters: {
    still: {
      label: "STILL",
      lines: ["A still", "moment."],
    },
    joy: {
      label: "THIS JOY",
      caption: "Caught mid-laugh.",
    },
    then: {
      label: "AND THEN",
      line: "there is her.",
    },
    her: {
      label: "HER",
      caption: "Exactly as she is.",
    },
  },

  letter: {
    body: `A handful of photographs from the shoot.
Set down in one place, for the day.

Have a beautiful year.`,
    close: "For Yinka.",
    replay: "REPLAY EXPERIENCE",
  },

  photos: [
    {
      id: "01",
      world: "light",
      layout: "cover",
      chapter: "THE LIGHT",
      title: "Yinka",
      caption: "A celebration of you.",
      objectPosition: "center 16%",
      alt: "Yinka dancing in a two-tone blue dress against an ivory studio backdrop, looking toward the camera and smiling.",
      sizes: "100vw",
    },
    {
      id: "02",
      world: "light",
      layout: "split",
      chapter: "STILL",
      title: "Yinka",
      caption: "A still moment.",
      objectPosition: "center 12%",
      alt: "Yinka seated on a wooden chair in a royal and sky-blue ensemble, gazing upward and away from the camera.",
      sizes: "(min-width: 1024px) 55vw, 100vw",
    },
    {
      id: "03",
      world: "light",
      layout: "offset",
      chapter: "THIS JOY",
      title: "Yinka",
      caption: "Caught mid-laugh.",
      objectPosition: "center 18%",
      alt: "Yinka laughing with her eyes closed, standing in profile in a blue dress beside a palm in an ivory studio.",
      sizes: "(min-width: 1024px) 70vw, 100vw",
    },
    {
      id: "04",
      world: "warm",
      layout: "bleed",
      chapter: "AND THEN",
      title: "Yinka",
      caption: "there is her.",
      objectPosition: "center 10%",
      alt: "Yinka standing in an electric blue tailored suit against a warm amber backdrop, hands clasped, looking at the camera.",
      sizes: "100vw",
    },
    {
      id: "05",
      world: "warm",
      layout: "icon",
      chapter: "HER",
      title: "Yinka",
      caption: "Exactly as she is.",
      objectPosition: "center 8%",
      alt: "Yinka standing in an electric blue suit against an amber studio backdrop, hands behind her back, looking directly at the camera.",
      sizes: "(min-width: 1024px) 58vw, 92vw",
    },
    {
      id: "06",
      world: "dark",
      layout: "intimate",
      chapter: "TODAY",
      title: "Yinka",
      caption: "Happy Birthday.",
      objectPosition: "center 18%",
      alt: "Close portrait of Yinka seated in an electric blue top against a warm amber background, smiling toward the camera.",
      sizes: "(min-width: 1024px) 42vw, 92vw",
    },
  ] satisfies Photo[],
};

export type BirthdayData = typeof birthdayData;
