export const headerItems = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Service",
    path: "service",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "Download CV",
    path: "resume",
  },
];

export const skills = [
  {
    type: "Frontend",
    skills: [
      {
        name: "UI/UX Design",
        value: 60,
      },
      {
        name: "React",
        value: 100,
      },
      {
        name: "React Native",
        value: 100,
      },
      {
        name: "Angular",
        value: 70,
      },
    ],

    gradient: "linear-gradient(135deg, #f6d36544 0%, #fda085cc 100%)",
    stroke: "var(--skill1)",
  },
  {
    type: "Backend",
    skills: [
      {
        name: "Java",
        value: 85,
      },

      {
        name: "Python",
        value: 99,
      },
      {
        name: "SQL",
        value: 80,
      },
      {
        name: "Node.js",
        value: 70,
      },
    ],
    gradient: "linear-gradient(135deg, #96deda44 0%, #50c9c3cc 100%)",
    stroke: "var(--skill2)",
  },
  {
    type: "Project management",
    skills: [
      {
        name: "Jira",
        value: 80,
      },
      {
        name: "Agile",
        value: 90,
      },
      {
        name: "Scrum",
        value: 95,
      },
      {
        name: "Kanban",
        value: 60,
      },
      {
        name: "DevOps",
        value: 80,
      },
    ],
    gradient: "linear-gradient(135deg, #a8c0ff44 0%, #8472dd 100%)",
    stroke: "var(--skill3)",
  },
  {
    type: "Cloud",
    skills: [
      {
        name: "AWS",
        value: 75,
      },
      {
        name: "Azure",
        value: 70,
      },
      {
        name: "Google Cloud",
        value: 40,
      },
    ],

    gradient: "linear-gradient(135deg, #f093fb44 0%, #f5576ccc 100%)",
    stroke: "var(--skill4)",
  },
];

export const portfolio = [
  {
    name: "Mobile Apps",
    projects: [
      {
        id: 0,
        name: "CashCompass",
        desc: "CashCompass is a user-friendly app that helps users manage their finances by tracking income, expenses, savings, and financial goals",
        img: require("../assets/projects/app/CashCompass.png"),
      },
      {
        id: 1,
        name: "Hair'cut",
        desc: "Hair'cut is an app that simplifies hair salon management and appointment booking for clients and staff, featuring an easy-to-use interface",
        img: require("../assets/projects/app/Haircut.png"),
      },
      {
        id: 2,
        name: "Ehrhart",
        desc: "Ehrhart is a mobile app for a viticulture company, allowing their providers to book appointments for grape harvesting and wine delivery",
        img: require("../assets/projects/app/Ehrhart.png"),
      },
    ],
  },
  {
    name: "Websites",
    projects: [
      /*{
        id: 0,
        name: "Nathalie' personal Website",
        desc: "Personal website of Nathalie, a talented Data Scientist, highlighting her skills, publications, and experience",
        img: require("../assets/projects/website/Nathalie.png"),
      },*/
      {
        id: 1,
        name: "Elodie' personal Website",
        desc: "Elodie's personal website highlights her engineering experience, projects, and skills",
        img: require("../assets/projects/website/Elodie.png"),
      },
      {
        id: 2,
        name: "Charles' personal Website",
        desc: "Charles' personal website showcases his skills, achievements, and services with an interactive portfolio and contact information",
        img: require("../assets/projects/website/Charles.png"),
      },
    ],
  },
];
