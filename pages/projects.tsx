import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectNavBar from "../components/ProjectNavBar";
import { Projects } from "../data";
import { Category } from "../type";

const projects = () => {
  const [ProjectState, setProjectState] = useState(Projects)
  const [active, setActive] = useState("all")

  const handleFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjectState(Projects);
      setActive(category);
      return
    }
    const newArray = Projects.filter((project) => project.category.includes(category));
    setProjectState(newArray);
    setActive(category);
  }
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: "75vh" }}>
      <ProjectNavBar handleFilterCategory={handleFilterCategory}  active={active}/>
      <div className="relative grid grid-cols-12 gap-6 mx-4 my-3">
        {ProjectState.map((project) => (
          <div className="col-span-12 sm:col-start-6 lg:col-span-4">
            <ProjectCard project={project} key={project.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
