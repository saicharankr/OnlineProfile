import { FunctionComponent } from "react";
import { IconType } from "react-icons";

export interface IService {
  id:number
  Icon: IconType;
  title: string;
  desc: string;
}

export interface ISkill {
  id: number;
  Icon: IconType;
  name: string;
  level: string;
}

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = "React" | "Node" | "Express" | "Django" | "Mongo" | "Ionic" | "Angular" | "Python" | "Web Scraping" | "Data Science" | "Blogs/Articles" | "Chat Bot";