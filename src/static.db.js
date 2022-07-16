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

export { skills, projects, routes, testimonials };
