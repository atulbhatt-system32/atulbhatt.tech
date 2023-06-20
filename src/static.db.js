const skills = [
  {
    category: "Basic Web",
    items: [
      {
        name: "HTML",
        level: "Advanced",
      },
      {
        name: "CSS",
        level: "Advanced",
      },
      {
        name: "JavaScript",
        level: "Advanced",
      },
    ],
  },
  {
    category: "CSS Frameworks",
    items: [
      {
        name: "Bootstrap",
        level: "Advanced",
      },
      {
        name: "Tailwind",
        level: "Advanced",
      },
      {
        name: "Styled Components",
        level: "Advanced",
      },
    ],
  },
  {
    category: "CSS Pre-Processors",
    items: [
      {
        name: "Sass",
        level: "Advanced",
      },
    ],
  },
  {
    category: "UI Dev Libraries",
    items: [
      {
        name: "React",
        level: "Advanced",
      },
    ],
  },
  {
    category: "UI Component Libraries",
    items: [
      {
        name: "Material UI",
        level: "Advanced",
      },
      {
        name: "Core UI",
        level: "Advanced",
      },
      {
        name: "Story Book",
        level: "Advanced",
      },
    ],
  },

  {
    category: "State Management Libraries",
    items: [
      {
        name: "React Context",
        level: "Advanced",
      },
      {
        name: "Redux",
        level: "Advanced",
      },
      {
        name: "Thunks",
        level: "Advanced",
      },
    ],
  },
  {
    category: "Version Control",
    items: [
      {
        name: "Git",
        level: "Advanced",
      },
      {
        name: "SVN",
        level: "Advanced",
      },
    ],
  },
  {
    category: "Bundle Tools",
    items: [
      {
        name: "Webpack",
        level: "Advanced",
      },
    ],
  },
];

const projects = [
  {
    id: 1,
    name: "SourceBae",
    url: "https://sourcebae.com/",
    color: "#bc53ff",
    thumbnail: "https://i.ibb.co/rZrbTjN/sourcebae.png",
  },

  {
    id: 3,
    name: "Rene CSS",
    url: "https://renecss.org/",
    color: "#3f2aff",
    thumbnail: "https://i.ibb.co/BZjhRVk/rene.png",
  },
  {
    id: 4,
    name: "Vital",
    url: "https://vital-dapp.netlify.app/",
    color: "#66e5e9",
    thumbnail: "https://i.ibb.co/2hwKQft/vital-tumbnail.png",
  },
  {
    id: 5,
    name: "Tealbox digital",
    url: "https://www.tealbox.digital/",
    color: "#4de0d2",
    thumbnail: "https://i.ibb.co/TLmM8GV/tealbox.png",
  },
  {
    id: 6,
    name: "Samadhan",
    url: "https://samadhan.tech/",
    color: "#f50057",
    thumbnail: "https://i.ibb.co/mvkZMYW/bharat-connect.png",
  },
  {
    id: 7,
    name: "Under",
    url: "https://weareunder.design/",
    color: "#ffbd00",
    thumbnail: "https://i.ibb.co/GHZ2VKZ/weareunder.png",
  },
  {
    id: 8,
    name: "Rainbow Company",
    url: "https://rnbw.company/",
    color: "#ffbd00",
    thumbnail: "https://i.ibb.co/X2gmPpD/rnbw-company.png",
  },
  {
    id: 9,
    name: "StoryTeller",
    url: "https://www.thestoryteller.tech/",
    color: "#7167FB",
    thumbnail: "https://i.ibb.co/rbsWCkc/story-teller.png",
  },
  {
    id: 10,
    name: "Rainbow Design Tool",
    url: "https://rnbw.dev/",
    color: "#e111be",
    thumbnail: "https://i.ibb.co/ykyDgTv/rnbw-dev.png",
  },
  {
    id: 11,
    name: "Raincons",
    url: "https://raincons.rnbw.dev/",
    color: "#ff5151",
    thumbnail: "https://i.ibb.co/fqLQbNt/Raincons.png",
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
  // {
  //   id: 1,
  //   project: "Samadhan",
  //   name: "Varun",
  //   designation: "Founder",
  //   image: "https://drive.google.com/uc?id=1LfdXvK3J0OicF4AIe7LnIrzEBugYC6aL",
  //   linkedIn: "https://www.linkedin.com/in/soganivarun/",
  //   testimony:
  //     "It was a phenomenal job done by the team. They were very responsive and provided a great service. I would definitely recommend them to anyone.",
  //   videoTestimonyLink: null,
  // },
  {
    id: 2,
    project: "Side",
    name: "Sreeja",
    designation: "Lead Python Developer at PTW",
    image: "https://i.ibb.co/T4gGrHN/sreeja.jpg",
    linkedIn: "https://www.linkedin.com/in/sreeja-vijayakumar/",
    testimony:
      "Atul is self motivated and an exceptional learner. He has worked on a very complex module and made it exactly as per the requirements.  It is a pleasure working with Atul and he is an asset to any team.",
    videoTestimonyLink: null,
  },

  {
    id: 3,
    project: "TealBox",
    name: "Karan Dubey",
    designation: "EiR",
    image: "https://i.ibb.co/28DJN0d/karan.jpg",
    testimony:
      "We reached out to Atul for our website and the entire process of handout was very very smooth. He committed to a timeline of around 7 days and I had the website in 3 days.",
    videoTestimonyLink: null,
  },
  {
    id: 4,
    project: "BigOn",
    name: "Rajesh Durai",
    designation: "Entrepreneur",
    image: "https://i.ibb.co/YcpQTLy/rajesh.jpg",
    linkedIn: "https://www.linkedin.com/in/rajeshdurai/",
    testimony:
      "We hired Atul for one of our web-based projects. He took the time to understand my needs and provided me with a customized solution that exceeded my expectations. Overall, I would highly recommend working with Atul for any web related projects.",
    videoTestimonyLink: null,
  },
  {
    id: 5,
    project: "Compex Analytics",
    name: "Prakhar Agarwal",
    designation: "Team Lead",
    image: "https://i.ibb.co/2MRKkr4/prakhar.jpg",
    testimony:
      "Atul is a good professional to work with. He is a dedicated professional and a talented colleague . I worked with him on variety of projects where he show case his strengths and capabilities.",
    videoTestimonyLink: null,
  },
  {
    id: 6,
    project: "Rainbow",
    name: "Eden Vidal",
    designation: "Co-Founder and Creative Director",
    image: "https://i.ibb.co/mz7Knb0/eden-vidal.jpg",
    linkedIn: "https://www.linkedin.com/in/edenvidal/",
    testimony:
      "Working with Atul was always a delight. His exceptional communication skills, timely delivery of great work, and strong skills made him a pleasure to collaborate with. His curiosity and willingness to step outside his expertise made him a valuable asset to any project. I especially enjoyed working with him on a hyper-experimental project and would happily work with him again.",
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
    id: 5,
    company: "Under (Freelance)",
    designation: "Web Developer",
    startDate: "2022-04-30",
    endDate: "",
    isCurrent: true,
    description: "",
    projects: [],
    technologies: [],
  },
  {
    id: 4,
    company: "InfoKoders (Contractual)",
    designation: "Sr. React Developer",
    startDate: "2022-04-30",
    endDate: "2023-02-30",
    isCurrent: false,
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
    email: "Email: mratulbhatt97+webdev@gmail.com",
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
      projects_list: projects,
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
      second_description: "but apart from this i’m a poet or a writer",
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

    blog_tab: {},
    podcast_tab: {
      podcast_list: [
        "https://anchor.fm/atul-bhatt/embed/episodes/Know-It-Today--S01--E01--Time--Lifestyle--Passion-Part-1-e14pfr8",
      ],
    },
    videos_tab: {
      videos_list: [
        {
          title:
            "Python Programming Using Jupyter Notebook (Anaconda) | Know It Today | Intro to Jupyter Notebook",
          url: "https://www.youtube.com/embed/nci8Ue2BXi0",
        },
        {
          title: "Path To Programming | 1.1 Installing the latest Windows 10",
          url: "https://www.youtube.com/embed/VAgj-u_tp0Y",
        },
      ],
    },
  },
  skills: {
    title: "Skills",
    skilsList: skills,
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
