import { IService, ISkill, IProject, Category } from './type';
import { GiSpiderWeb, GiTeacher } from "react-icons/gi";
import {BsStar} from "react-icons/bs"
import { FaAngular } from "react-icons/fa"
import {MdDeveloperBoard, MdDeveloperMode} from "react-icons/md"
import { AiOutlineApi } from "react-icons/ai";
import { SiCodewars } from "react-icons/si";


export const services: IService[] = [
  {
    id:1,
    Icon: GiTeacher,
    title: "Programming Teacher",
    desc:"I provide online training of Python and JavaScript"
  },
  {
    id:2,
    Icon: FaAngular,
    title: "Front End Development",
    desc:" I can develop beautiful SPA using Angular , Next.js , React.js\n and simple organic websites using  HTML ,scss ,css,Typescript,JavaScript"
  },
  {
    id:3,
    Icon: MdDeveloperBoard,
    title: "Back End Development",
    desc:"Familiar handle databases like Postgre,MongoDb,MySql,MS-SQL."
  },
  {
    id:4,
    Icon: AiOutlineApi,
    title: "Api Development",
    desc:"REST API development using python FastApis and Nodejs"
  },
  {
    id:5,
    Icon: GiSpiderWeb,
    title: "Web Scraping",
    desc:" 1. Using Python libraries like beautiful soup and selenium\n2. Using Node.js cheerio , axios"
  },
  {
    id:6,
    Icon: MdDeveloperMode,
    title: "Cross platform Mobile App Development",
    desc:"Develop Cross Platform Mobile Apps using Ionic Framework"
  },
  {
    id:7,
    Icon: SiCodewars,
    title: "Competitive Programmer and Problem Solver",
    desc:"I solve problems in Codewars,HackEarth,HackerRank,TechGig"
  },
]

export const Skills: ISkill[] = [
  {
    id: 1,
    Icon: BsStar,
    name: "Python",
    level: "90"
  },
  {
    id: 2,
    Icon: BsStar,
    name: "JavaScript",
    level: "70"
  },
  {
    id: 3,
    Icon: BsStar,
    name: "C#",
    level: "70"
  },
  {
    id: 4,
    Icon: BsStar,
    name: "PHP",
    level: "50"
  },
  {
    id: 5,
    Icon: BsStar,
    name: "Java",
    level: "50"
  },
  {
    id: 6,
    Icon: BsStar,
    name: "SQL",
    level: "90"
  },
  {
    id: 7,
    Icon: BsStar,
    name: "HTML/CSS",
    level: "90"
  },
]

export const frameWorks: ISkill[] = [
  {
    id: 1,
    Icon: BsStar,
    name: "FastApi/Flask/Django",
    level: "100"
  },
  {
    id: 2,
    Icon: BsStar,
    name: "Numpy/Pandas/matplotlib/</br>Tensorflow/Keras/SkLearn/NLTK",
    level: "100"
  },
  {
    id: 3,
    Icon: BsStar,
    name: "Selenium/BeautifulSoup",
    level: "100"
  },
  {
    id: 4,
    Icon: BsStar,
    name: "React/Next.js/Node.js/Ionic/</br>Angular/</br>Joint.js/Rappid.js/</br>KnockOut.js/HighCharts/d3js",
    level: "100"
  },
  {
    id: 5,
    Icon: BsStar,
    name: "ASP.NET CORE MVC/Unity",
    level: "100"
  },
  {
    id: 7,
    Icon: BsStar,
    name: "Bootstrap/TailwindCss",
    level: "100"
  },
]

export const Projects: IProject[] = [
  {
    id:1,
    name: "KrishiKhoj",
    description: "KrishiKhoj helps farmers discover agricultural services and service providers in their vicinity. KrishiKhoj enables service providers to list their services and users to discover these services and contact them for availing the service.",
    image_path: "/Images/Krishikhoj.png",
    deployed_url: "https://play.google.com/store/apps/details?id=com.krishikhoj.application&hl=en&gl=In",
    github_url: "Developed at Celominds solutions pvt ltd.",
    category:["Ionic","Angular","Django"],
    key_techs: ["TypeScript","Ionic","Angular","Django"],
  },
  {
    id:2,
    name: "News Aggregator",
    description: "This application is to demonstrate skills of web scraping,Ionic Framework,NodeJS and ExpressJS",
    image_path: "/Images/NewsAppPic3.png",
    deployed_url: "",
    github_url: "https://github.com/saicharankr/NewsApi , https://github.com/saicharankr/NewsZone",
    category:["Ionic","Angular","Node","Express"],
    key_techs: ["TypeScript","Ionic","Angular","Django","Node","Express","JavaScript"],
  },
  {
    id:3,
    name: "Google Business Listing Scraper",
    description: "This Script is used to the scrape Business listings from Google Business",
    image_path: "/Images/WebScraping1.png",
    deployed_url: "https://medium.com/analytics-vidhya/collect-leads-for-your-business-in-5-minutes-using-web-scraping-10b01b55e96",
    github_url: "https://github.com/saicharankr/Google_business_listings_scraper",
    category:["Python","Web Scraping","Blogs/Articles"],
    key_techs: ["Beautiful Soup","Selenium","Python","Web Scraping"],
  },
  {
    id:4,
    name: "Walmart Sales Data Analysis",
    description: "Data science project",
    image_path: "/Images/Walmart.png",
    deployed_url: "https://medium.com/analytics-vidhya/a-data-science-project-for-beginners-exploratory-data-analysis-eda-d334f58f94ee",
    github_url: "https://github.com/saicharankr/Walmart_Sales_Data_Analysis",
    category:["Python","Data Science"],
    key_techs: ["Pandas","Numpy","Python"],
  },
  {
    id:5,
    name: "Create a chat bot In 10 minutes easily no coding skills required",
    description: "In this tutorial, you will learn to create a chatbot that can be added to any of your web pages.",
    image_path: "/Images/ChatBot.png",
    deployed_url: "https://medium.com/analytics-vidhya/create-a-chat-bot-in-10-minutes-easily-no-coding-skills-required-f68345c0f229",
    github_url: "https://medium.com/analytics-vidhya/create-a-chat-bot-in-10-minutes-easily-no-coding-skills-required-f68345c0f229",
    category:["Chat Bot","Blogs/Articles"],
    key_techs: ["Dialogflow","BotCopy"],
  },
  {
    id:6,
    name: "Graphical view of coronavirus live update — Using python",
    description: "Demostrating the skils of Web scraping ,python and D3js",
    image_path: "/Images/Chart.png",
    deployed_url: "https://medium.com/analytics-vidhya/graphical-view-of-coronavirus-live-update-using-python-f83903e5870",
    github_url: "https://github.com/saicharankr/WebScrap",
    category:["Web Scraping","Blogs/Articles"],
    key_techs: ["Python","D3js","Beautiful Soup","Selenium"],
  },
]

