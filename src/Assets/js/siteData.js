const skills = {
  basicWeb: {
    html: {
      name: "HTML",
    },
    css: {
      name: "CSS",
    },
    js: {
      name: "JavaScript",
    },
  },
  cssFramework: {
    bootstrap: {
      name: "Bootstrap",
    },
    tailwind: {
      name: "Tailwind",
    },
    styledComponents: {
      name: "Styled Components",
    },
  },
  cssPreProcessors: {
    sass: {
      name: "Sass",
    },
  },
  uiDevlopementLibs: {
    react: {
      name: "React",
    },
  },
  uiComponentLibs: {
    mui: {
      name: "MUI/Material UI",
    },
    storybook: {
      name: "Storybook",
    },
    coreUI: {
      name: "Core UI",
    },
  },
  stateManagementLibs: {
    redux: {
      name: "Redux",
    },
    context: {
      name: "React Context/Context API",
    },
  },
  jsBundlers: {
    webpack: {
      name: "Webpack",
    },
  },
};

const socialLinks = {
  github: "https://github.com/atulbhatt-system32",
  linkedin: "https://www.linkedin.com/in/atulbhatt98/",
  twitter: "https://twitter.com/atulbhatt98",
  devto: "https://dev.to/atulbhattsystem32",
  stackoverflow: "https://stackoverflow.com/users/9997978/atul-bhatt",
  medium: "https://medium.com/@atulbhatt",
  peerlist: "https://peerlist.io/atulbhatt",
  instagram: "https://www.instagram.com/mratulbhatt/",
  facebook: "https://www.facebook.com/atul.bhatt.560",
  youtube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
};

const projects = {
  opensource: {
    react17tempalte: {
      name: "React 17 Template",
      description: "A React 17 Template for Web Development",
      url: "https://github.com/atulbhatt-system32/React17",
      image:
        "https://raw.githubusercontent.com/atulbhatt-system32/React17/master/public/images/react17.png",
      tech: [
        skills.basicWeb.html.name,
        skills.basicWeb.css.name,
        skills.basicWeb.js.name,
        skills.uiDevlopementLibs.react.name,
      ],
      features: [
        "React 17 Template",
        "React 17 Template",
        "React 17 Template",
        "React 17 Template",
        "React 17 Template",
      ],
    },
    rene: {
      name: "Rene",
      description:
        "A utility-first CSS framework for building clean, simple and lightweight interfaces, fully customizable with variables, themes, and icons. Easy syntax to quickly 'get it' and create any design in any framework. No weird stuff.",
      url: "https://github.com/relateapp/rene.css",
      image: null,
      tech: [
        skills.basicWeb.css,
        skills.basicWeb.js,
        skills.basicWeb.html,
        skills.jsBundlers.webpack,
      ],
      features: [],
    },
  },
  freelance: {
    rene: {
      name: "Rene",
      description:
        "A utility-first CSS framework for building clean, simple and lightweight interfaces, fully customizable with variables, themes, and icons. Easy syntax to quickly 'get it' and create any design in any framework. No weird stuff.",
      url: "https://github.com/relateapp/rene.css",
      image: null,
      tech: [
        skills.basicWeb.css,
        skills.basicWeb.js,
        skills.basicWeb.html,
        skills.jsBundlers.webpack,
      ],
      features: [],
    },
    under: {
      name: "Under",
      description:
        "A design studio website for a design agency based in Israel.",
      url: "https://weareunder.design/",
      image: null,
      tech: [],
      features: [],
    },
    vital: {
      name: "Vital",
      description: "A landing page for a dapp",
      url: "https://vital-dapp.netlify.app/",
      image: null,
      tech: [],
      features: [],
    },
    rbc: {
      name: "Rubesian Beauty Club",
      description:
        "A landing page for a dapp that caters NFTS. It also required the integration of metamask.",
      url: "https://rubensianbeautyclub.netlify.app/",
      image: null,
      tech: [],
      features: [],
    },
    tealbox: {
      name: "Tealbox",
      description: "A wix website for a business",
      url: "https://www.tealbox.com/",
      image: null,
      tech: [],
      features: [],
    },
    automyze: {
      name: "Automyze Digital",
      description:
        "A custom portal for property management built using react over core UI framework.",
    },
  },

  corporate: {
    designboardz: {
      name: "DesignBoards",
      description:
        "DesignBoardz is a free Pinterest-style website for the commercial furnishings industry. We provide a seamless and agile tool that helps designers and sales professionals find, integrate, and share project content with their clients and colleagues. Time is saved, collaboration is improved, revisions are reduced, and profits are increased.",
      url: "http://www.designboardz.com/",
      image: null,
      tech: [],
      features: [],
    },
    samadhan: {
      name: "Samadhan",
      description:
        "DesignBoardz is a free Pinterest-style website for the commercial furnishings industry. We provide a seamless and agile tool that helps designers and sales professionals find, integrate, and share project content with their clients and colleagues. Time is saved, collaboration is improved, revisions are reduced, and profits are increased.",
      url: "https://samadhan.tech/",
      image: null,
      tech: [],
      features: [],
    },
    sourcebae: {
      name: "SourceBae",
      description:
        "SourceBae is a Marketplace that connects you with IT Agencies and Dedicated Remote Developers from around the world. We make it easy for you to find an agency to build MVP at a fixed cost or hire Developers on a monthly contract.",
      url: "https://sourcebae.com/",
      image: null,
      tech: [],
      features: [],
    },
    sourcebaeLanding: {
      name: "SourceBae Landing Page",
      description:
        "This was an enhanced landing page which I built in my last days at Shethink. However this was later deprecated because the dark theme was not at all related to the actual product. So I decided to pick it up and host it separately. Beacuse it was very beautifully designed by Ankit (UI developer)",
      url: "https://atulbhatt-system32.github.io/SourceBae/",
      image: null,
      tech: [],
      features: [],
    },

    lmsAnalytics: {
      name: "LMS Analytics",
      description:
        "This was a project for an Organization IT Cube where I was outsourced. The application was related to visualisation of data through graph.",
      url: null,
      image: null,
      tech: [],
      features: [],
    },
    side: {
      name: "Side",
      description:
        "It was one of the best project I've worked on and actually learned a lot from. It had a ton of complex functionalties. It was the first time I had to work with drag and drop functionality.",
      url: "null",
      image: null,
      tech: [],
      features: [],
    },
  },
};
const config = {
  toggleableSettings: {
    isDarkMode: true,
    isGrayscale: false,
    isLoaderActive: false,
  },
  pages: {
    home: {
      isvisible: true,
    },
  },
};

export { skills, socialLinks, projects, config };
