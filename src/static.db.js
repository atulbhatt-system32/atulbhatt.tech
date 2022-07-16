const skills = [
  {
    basicWeb: {
      html: {
        name: "HTML",
        level: "Advanced",
      },
      css: {
        name: "CSS",
        level: "Advanced",
      },
      js: {
        name: "JavaScript",
        level: "Advanced",
      },
    },
    cssFrameworks: {
      bootstrap: {
        name: "Bootstrap",
        level: "Advanced",
      },
      tailwind: {
        name: "Tailwind",
        level: "Advanced",
      },
      styledComponents: {
        name: "Styled Components",
        level: "Advanced",
      },
    },
    cssPreProcessors: {
      sass: {
        name: "Sass",
        level: "Advanced",
      },
    },
    uiDevLibs: {
      react: {
        name: "React",
        level: "Advanced",
      },
    },
    uiComponentLibs: {
      materialUI: {
        name: "Material UI",
        level: "Advanced",
      },
      coreUI: {
        name: "Core UI",
        level: "Advanced",
      },
      storyBook: {
        name: "Story Book",
        level: "Advanced",
      },
    },
    stageMgmtLibs: {
      reactContext: {
        name: "React Context",
        level: "Advanced",
      },
      redux: {
        name: "Redux",
        level: "Advanced",
      },
      thunks: {
        name: "Thunks",
        level: "Advanced",
      },
    },
    versionControl: {
      git: {
        name: "Git",
        level: "Advanced",
      },
      svn: {
        name: "SVN",
        level: "Advanced",
      },
    },
    jsBundlers: {
      webpack: {
        name: "Webpack",
        level: "Advanced",
      },
    },
  },
];

const projects = [{}];

const routes = {
  home: {
    path: "/",
    name: "Home",
  },
  skills: {
    path: "/skills",
    name: "Skills",
  },
  projects: {
    path: "/projects",
    name: "Projects",
  },
  content: {
    path: "/content",
    name: "Content",
  },
  aboutMe: {
    path: "/about-me",
    name: "About Me",
  },
};

const testimonials = {
  samadhan: {
    name: "Varun",
    designation: "Founder",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/varun-samadhan-b9a8b917b/",
    testimony:
      "It was a phenomenal job done by the team. They were very responsive and provided a great service. I would definitely recommend them to anyone.",
    videoTestimonyLink: null,
  },
  side: {
    name: "Sreeja",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/sreeja-k-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },

  tealbox: {
    name: "Karan Dubey",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/karan-dubey-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },
  BigOn: {
    name: "Rajesh Durai",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/karan-dubey-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },
};

const links = {
  socialLinks: {
    linkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/atulbhatt98/",
      isActive: true,
    },
    github: {
      name: "Github",
      url: "https://github.com/atulbhatt-system32",
      isActive: true,
    },
    twitter: {
      name: "Twitter",
      url: "https://twitter.com/atulbhatt98",
      isActive: true,
    },
    facebook: {
      name: "Facebook",
      url: "https://www.facebook.com/atul.bhatt.560",
      isActive: true,
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/mratulbhatt/",
      isActive: true,
    },
    medium: {
      name: "Medium",
      url: "https://medium.com/@atulbhatt98",
      isActive: true,
    },
    stackOverflow: {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/9997978/atul-bhatt",
      isActive: true,
    },
    devto: {
      name: "dev.to",
      url: "https://dev.to/atulbhattsystem32",
      isActive: true,
    },
    peerlist: {
      name: "PeerList",
      url: "https://peerlist.io/atulbhatt",
      isActive: true,
    },
  },
  resume: {
    url: "https://app.flowcv.com/resume-feedback/I9mIthN9VwYc",
    isActive: true,
  },
};

const layoutStrings = {
  navbar: {},
  footer: {
    phone: "Phone: +91-8958318394",
    email: "Email: atulbhatt98@gmail.com",
    copyright: "© 2022 Atul Bhatt. Designed by AnkyStudio.",
  },
};
const pagesStrings = {
  home: {
    Intro_Section: {
      title: "My passion is to build useful Product.",
      sub_title_dark: "i’m a Frontend developer & a technical blogger.",
      sub_title_light:
        " I’ve always been a lover of tech and that love brought me into the software development field. I’ve been into programming since 2016.",
      button_text: "Let’s Connect",
    },
    Skills_section: {
      title1: "Skills & ",
      title2: "Experince",
      sub_title:
        "😎 A specialist in frontend development. ✨ A passion of mine is development and solving problem through my skills",
    },

    socialLinks: [
      links.socialLinks.linkedIn,
      links.socialLinks.github,
      links.socialLinks.twitter,
    ],
  },
  aboutme: {
    about_me_hero_section: {
      title: "I hail from Devbhumi well known as Uttarakhand.",
    },

    quote_section: {
      quote:
        "FE dev. Prefer songs instead of coffee to keep me awake. Wanna be Jack of all trades but still a master of some. Hate Failures but love trying out. A poet maybe!",
    },

    description_with_image: {
      first_description: "development for me is like oxygen ",
      second_description:
        "but apart from this i’m fitness  enthusiast and selenophile",
    },
  },
  content: {
    content_tabs: {
      blog: "Blog",
      videos: "Videos",
      podcast: "Podcast",
    },

    search_title: {
      title: "Search Blog",
    },
  },
};
export {
  skills,
  projects,
  routes,
  testimonials,
  links,
  pagesStrings,
  layoutStrings,
};
