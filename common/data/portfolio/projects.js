/** @format */

// template: {
//     key: "",
//     image: "",
//     title: "",
//     subtitle: "",
//     code: "",
//     url: "",
//     tech: [],
//     tags: [],
//     },

export const projectsData = {
  dev: {
    obbie: {
      key: "obbie",
      image: "/projectImages/obbie.png",
      title: "Obbie",
      code: "https://github.com/kunkunzhu/obbie",
      subtitle: "showing up to the side quests that are meaningful to you",
      tech: ["Remix.js", "Tailwind CSS", "Prisma", "MongoDB"],
      tags: ["web-app"],
    },

    converstation: {
      key: "convo",
      image: "/projectImages/converstation.png",
      title: "converstation",
      code: "https://github.com/vibbyg/converstation",
      url: "https://converstation.vercel.app/",
      subtitle:
        //   "Gamify the generation of conversation prompts to catalyze inspire deeper connection.",
        "catalyzing deeper connections through gamified conversational prompts",
      tech: ["Next.js", "Tailwind CSS", "Notion API"],
      tags: ["web-app"],
    },

    strangersongs: {
      key: "strangersongs",
      image: "/projectImages/sss.png",
      title: "Songs, Stories, Strangers",
      url: "https://songs-stories-strangers.vercel.app/",
      subtitle:
        //   "send a song that is meaningful to you and receive a song from a stranger in return.",
        "exchanging songs and stories with strangers across the internet",
      tech: ["Next.js", "Spotify API", "PostgreSQL"],
      tags: ["web-app"],
      code: "https://github.com/kunkunzhu/songs-stories-strangers/tree/main",
    },
    portfolio1: {
      key: "p1",
      title: "portfolio 1.0",
      subtitle: "the first website that I built (this is where it all began)",
      code: "https://github.com/kunkunzhu/personal-portfolio",
      url: "https://kunzhu.netlify.app",
      tech: ["React.js", "Styled-Components"],
      tags: ["portfolio", "website"],
    },
  },
};
