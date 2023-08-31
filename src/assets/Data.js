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
    name: "Services",
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
        name: "C/C++",
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
        name: "DoToday",
        desc: "DoToday is a task management app with an intuitive interface, progress tracking, and customizable themes.",
        img: require("../assets/projects/app/DoToday.webp"),
      },
      {
        name: "CashCompass",
        desc: "CashCompass is a user-friendly app that helps users manage their finances by tracking income, expenses, savings, and financial goals",
        img: require("../assets/projects/app/CashCompass.webp"),
      },
      // {
      //   name: "Hair'cut",
      //   desc: "Hair'cut is an app that simplifies hair salon management and appointment booking for clients and staff, featuring an easy-to-use interface",
      //   img: require("../assets/projects/app/Haircut.webp"),
      // },
      {
        name: "Ehrhart",
        desc: "Ehrhart is a mobile app for a viticulture company, allowing their providers to book appointments for grape harvesting and wine delivery",
        img: require("../assets/projects/app/Ehrhart.webp"),
      },
    ],
  },
  {
    name: "Websites",
    projects: [
      /*{
        name: "Nathalie' personal Website",
        desc: "Personal website of Nathalie, a talented Data Scientist, highlighting her skills, publications, and experience",
        img: require("../assets/projects/website/Nathalie.webp"),
      },*/
      {
        name: "Elodie' personal Website",
        desc: "Elodie's personal website highlights her engineering experience, projects, and skills",
        img: require("../assets/projects/website/Elodie.webp"),
      },
      {
        name: "Charles' personal Website",
        desc: "Charles' personal website showcases his skills, achievements, and services with an interactive portfolio and contact information",
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
      "Development of mobile apps for Android and iOS using React Native.",
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
      "Development of scripts to automate tasks and solve problems. I am proficient in Python, C/C++, Java and JavaScript. ",
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
