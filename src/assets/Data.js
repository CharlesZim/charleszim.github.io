import {
  AiOutlineDesktop,
  AiOutlineMobile,
  AiOutlineCode,
} from "react-icons/ai";
import { BsVectorPen, BsGithub } from "react-icons/bs";
import { MdComputer, MdMusicNote, MdFitnessCenter } from "react-icons/md";
import { FaPlaneDeparture, FaLinkedinIn } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

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
    name: "Expertise",
    path: "services",
  },
  {
    name: "Contact",
    path: "contact",
  },
  {
    name: "CV",
    path: "resume",
  },
];

export const hobbies = [
  {
    name: "Coding",
    icon: <MdComputer />,
  },
  {
    name: "Music",
    icon: <MdMusicNote />,
  },
  {
    name: "Gym",
    icon: <MdFitnessCenter />,
  },
  {
    name: "Travel",
    icon: <FaPlaneDeparture />,
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
        value: 90,
      },
      {
        name: "React Native",
        value: 95,
      },
      {
        name: "REST",
        value: 90,
      },
    ],

    gradient: "linear-gradient(135deg, #5fd4a3aa 0%, #5fd4a3bb 100%)",
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
        name: "C/C++",
        value: 80,
      },
      {
        name: "Node.js",
        value: 70,
      },
    ],
    gradient: "linear-gradient(135deg, #f6d36544 0%, #fda085cc 100%)",
    stroke: "var(--skill2)",
  },
  // {
  //   type: "Project management",
  //   skills: [
  //     {
  //       name: "Jira",
  //       value: 80,
  //     },
  //     {
  //       name: "Scrum",
  //       value: 95,
  //     },
  //     {
  //       name: "Kanban",
  //       value: 60,
  //     },
  //     {
  //       name: "DevOps",
  //       value: 80,
  //     },
  //   ],
  //   gradient: "linear-gradient(135deg, #a8c0ff44 0%, #8472dd 100%)",
  //   stroke: "var(--skill3)",
  // },
  {
    type: "Mobile iOS",
    skills: [
      {
        name: "Swift",
        value: 100,
      },
      {
        name: "SwiftUI",
        value: 100,
      },
      {
        name: "Core Data",
        value: 70,
      },
      {
        name: "Design Patterns",
        value: 85,
      },
    ],

    gradient: "linear-gradient(135deg, #587beecc 0%, #3c5fd3cc   100%)",
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
        name: "Docker",
        value: 60,
      },
      {
        name: "Kubernetes",
        value: 50,
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
        name: "Simple To Do Planner - ReaList",
        desc: "A task manager app made to assist users in their daily task management with a simple interface. Enhanced version of the DoToday app.",
        img: require("../assets/projects/app/ReaList.webp"),
      },
      {
        name: "Kanban - Project Management",
        desc: "A Kanban board app tailored for personal or small projects to optimize task management.",
        img: require("../assets/projects/app/Kanban.webp"),
      },
      {
        name: "DoToday: To-Do List Planner",
        desc: "DoToday is a task management app with an intuitive interface, progress tracking, and customizable themes.",
        img: require("../assets/projects/app/DoToday.webp"),
      },
      {
        name: "Cash Compass - Easy Budget",
        desc: "A budget management app designed to assist users in tracking their expenses and saving money.",
        img: require("../assets/projects/app/CashCompass.webp"),
      },
      {
        name: "Ehrhart Vendanges",
        desc: "Ehrhart is a mobile app for a viticulture company, allowing their providers to book appointments for grape harvesting and wine delivery.",
        img: require("../assets/projects/app/Ehrhart.webp"),
      },
    ],
  },
  {
    name: "Websites",
    projects: [
      {
        name: "Nathalie' personal Website",
        desc: "Personal website of Nathalie, a talented Data Scientist, highlighting her skills, publications, and experience.",
        img: require("../assets/projects/website/Nathalie.webp"),
      },
      {
        name: "Elodie' personal Website",
        desc: "Elodie's personal website highlights her engineering experience, projects, and skills.",
        img: require("../assets/projects/website/Elodie.webp"),
      },
      {
        name: "Charles' personal Website",
        desc: "Charles' personal website showcases his skills, achievements, and services with an interactive portfolio and contact information.",
        img: require("../assets/projects/website/Charles.webp"),
      },
    ],
  },
];

export const services = [
  {
    icon: <AiOutlineMobile />,
    title: "Mobile App Development",
    description:
      "Development of mobile apps for Android and iOS using React Native, and for Native iOS apps with Swift.",
  },
  {
    icon: <AiOutlineDesktop />,
    title: "Web Development",
    description: "Development of websites using React, Angular, and Node.js.",
  },
  {
    icon: <BsVectorPen />,
    title: "UI/UX Design",
    description:
      "Design of user interfaces and user experiences for mobile apps and websites.",
  },
  {
    icon: <AiOutlineCode />,
    title: "Programming Languages",
    description:
      "Development of scripts to automate tasks and solve problems. I am proficient in Python, Java and JavaScript. ",
  },
];

export const networks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charles-zimmerlin/",
    icon: <FaLinkedinIn className="iconNetwork" />,
    color: "#0e76a8",
  },
  {
    name: "GitHub",
    link: "https://github.com/CharlesZim",
    icon: <BsGithub className="iconNetwork" />,
    color: "#c9510c",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/chrlzmrln/",
    icon: <SiInstagram className="iconNetwork" />,
    color: "#e1306c",
  },
];
