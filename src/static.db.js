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

const projects = [
  {
    id: 1,
    name: "SourceBae",
    url: "https://sourcebae.com/",
    color: "#bc53ff",
  },
  {
    id: 2,
    name: "RecruitBae",
    url: "http://recruitbae.com/",
    color: "#0092a9",
  },
  {
    id: 3,
    name: "Rene CSS",
    url: "https://github.com/relateapp/rene.css",
    color: "#3f2aff",
  },
  {
    id: 4,
    name: "Vital",
    url: "https://vital-dapp.netlify.app/",
    color: "#ecebff",
  },
  {
    id: 5,
    name: "Tealbox digital",
    url: "https://www.tealbox.digital/",
    color: "#2A7FFF",
  },
  {
    id: 6,
    name: "Samadhan",
    url: "https://samadhan.tech/",
    color: "#3ab7bf",
  },
];

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

const testimonials = [
  {
    id: 1,
    project: "Samadhan",
    name: "Varun",
    designation: "Founder",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/varun-samadhan-b9a8b917b/",
    testimony:
      "It was a phenomenal job done by the team. They were very responsive and provided a great service. I would definitely recommend them to anyone.",
    videoTestimonyLink: null,
  },
  {
    id: 2,
    project: "Side",
    name: "Sreeja",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/sreeja-k-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },

  {
    id: 3,
    project: "TealBox",
    name: "Karan Dubey",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/karan-dubey-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },
  {
    id: 4,
    project: "BigOn",
    name: "Rajesh Durai",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/karan-dubey-b9a8b917b/",
    testimony:
      "Atul is self motivated and an exceptional learner who mastered the application in no time. He has worked on a very complex module and made it exactly as per the requirements with such ease. He was always available for any issue resolution and highly dedicated to the tasks. It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },
  {
    id: 5,
    project: "Compex Analytics",
    name: "Prakhar Agarwal",
    designation: "Team Lead",
    image: "https://i.ibb.co/qxXxXxL/varun.jpg",
    linkedIn: "https://www.linkedin.com/in/karan-dubey-b9a8b917b/",
    testimony:
      "Atul is a good professional to work with. He is a dedicated professional talented colleague. Keen to learn new technologies and a good team player. I worked with him on variety of projects where he showcased his strengths and capabilities.",
    videoTestimonyLink: null,
  },
];

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

const experience = [
  {
    id: 4,
    company: "Relate (Freelance)",
    designation: "Web Developer",
    startDate: "2022-04-30",
    endDate: "",
    isCurrent: true,
    description: "",
    projects: [],
    technologies: [],
  },
  {
    id: 3,
    company: "IT Cube (Outsourced)",
    designation: "React JS Developer",
    startDate: "2021-07-15",
    endDate: "2022-01-15",
    isCurrent: false,
    description:
      "I was an outsourced developer at IT Cubes. I was responsible for working on the Frontend of the internal application called 'LMS- Analytics'. It was Labour Management System. The direct client of the project was Shapoorji Pallonji. Before starting the project I was given with time to learn Django and create an api to integrate with 'Highcharts' in React. It was a dashboard with the purpose to show analytics in the form of different type of charts and graphs. It was a challenging project for me as it involved advance concepts like 'Redux along with thunks', and new concepts like 'Highcharts' and 'Cube JS`. In this project I came to know a lot of good people like our manager 'Ashwin Pathak' and the mentor to me was 'Omkar Jaltade' who were always supportive. Later on I was shifted to another project called 'Compex Analytics' which was much complex with tight deadlines. There I got support from teammates like Prakhar Agarwal, Sainath and Rohit Bhandari. It was an bitter-sweet experience as I had to break out of my comfort zone at a faster pace. I learned to debug my React application better after this project.",
    projects: [],
    technologies: [],
  },
  {
    id: 2,
    company: "PTW (Outsourced)",
    designation: "React JS Developer",
    startDate: "2021-09-01",
    endDate: "2022-02-28",
    isCurrent: false,
    description:
      "I was an outsourced developer at PTW. I was responsible for working on the Frontend of the internal application called 'SIDE' The functionalities were related to implementing drag and drop features to schedule meetings and sessions in a custom calendar UI. My role was to communicate with the Testers to understand the bugs and issues reported, resolve them, and update them on ZOHO sprint. My experience working at PTW was memorable and full of learning.It was a good team of developers, and testers, as well as the manager was very supportive. Our team lead, Sreeja was very understanding and fun to work with person. The best part working with the team was that everyone made sure that they don't become a blocker by creating a dependency by not being available, they made sure there presence was there whenever required. My last day as an outsourced developer was quite memorable as next day it was going to 'demo' day and shoot there were bug that reached the staging. It was fun to resolve it. The dedication of the team was phenomenal. A special and heartful thanks to - Kiran (Manager), Sreeja (Team Lead), Naveen (Senior React Developer), Pavitra (Tester), Gangadevi (UI Developer), Sushma (Tester)",
    projects: [],
    technologies: [],
  },
  {
    id: 1,
    company: "Shethink (In-House)",
    designation: "Sr. React Developer",
    startDate: "2020-06-01",
    endDate: "2022-04-30",
    isCurrent: false,
    description: "",
    projects: [],
    technologies: [],
  },
];

const layoutStrings = {
  navbar: {
    logoText: "Atul Bhatt",
  },
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
    skills_section: {
      title1: "Skills & ",
      title2: "Experience",
      sub_title:
        "😎 A specialist in frontend development. ✨ A passion of mine is development and solving problem through my skills",
    },

    socialLinks: [
      links.socialLinks.linkedIn,
      links.socialLinks.github,
      links.socialLinks.twitter,
    ],
    experience,

    projects: {
      title: "Projects",
      sub_title:
        "I have worked on a number of projects in my career. Some of them are:",
      projects_list: projects.slice(0, 7),
    },

    testimonials: {
      title: "Testimonials",
      sub_title:
        "Here are some of the people I have worked with and their testimonials:",
      testimonials_list: testimonials,
    },
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
