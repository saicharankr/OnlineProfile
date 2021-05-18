import { FunctionComponent, useState } from "react";
import { Category } from "../type";
export const NavItem: FunctionComponent<{
  value: Category | "All";
  handleFilterCategory: Function;
  active: string;
}> = ({ value, handleFilterCategory, active }) => {
  let className =
    "border-t-2 border-b-2 cursor-pointer border-green rounded-xl font-Ubuntu hover:text-green-500";
  if (active === value) className += " text-green-500";
  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavBar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="All" {...props} />
      <NavItem value="Blogs/Articles" {...props} />
      <NavItem value="Chat Bot" {...props} />
      <NavItem value="Django" {...props} />
      <NavItem value="Express" {...props} />
      <NavItem value="Ionic" {...props} />
      <NavItem value="Node" {...props} />
      <NavItem value="Python" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="Web Scraping" {...props} />
      <NavItem value="Data Science" {...props} />
    </div>
  );
};

export default ProjectNavBar;
