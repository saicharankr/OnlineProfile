import { FunctionComponent, useState } from "react";
import { IProject } from "../type";
import Image from "next/image";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const ProjectCard: FunctionComponent<{ project: IProject }> = ({
  project: {
    name,
    category,
    deployed_url,
    github_url,
    description,
    image_path,
    key_techs,
  },
}) => {
  const [ShowDetails, setShowDetails] = useState(false);
  const [showProjectCard, setShowProjectCard] = useState(true);

  return (
    <div>
      <div className="flex flex-col items-center justify-center dark:border-black-500 dark:bg-black-300">
        <Image
          src={image_path}
          alt={name}
          width={200}
          height={200}
          className="cursor-pointer"
          onClick={() => {
            setShowDetails(true), setShowProjectCard(false);
          }}
        />
        <p className="text-center font-Averia">{name}</p>
      </div>
      {ShowDetails && (
        <div
          className="absolute top-0 left-0 z-10 grid w-full h-auto bg-gray-300 md:grid-cols-2 dark:bg-black-500 dark:text-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center my-3">
            <Image src={image_path} alt={name} width={200} height={200} />
            <div className="flex justify-between py-2 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 font-Kaushan dark:bg-black-200 dark:text-gray-200 rounded-2xl"
                target="_blank"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 font-Kaushan dark:bg-black-200 dark:text-gray-200 rounded-2xl"
                target="_blank"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center my-3">
            <h2 className="text-2xl font-bold font-Averia">{name}</h2>
            <h3 className="mr-2 font-light text-justify font-Averia">
              {description}
            </h3>
            <div className="grid grid-cols-4 gap-4 my-3">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="w-full py-1 text-sm text-center bg-gray-200 font-Averia dark:bg-black-200 dark:text-gray-200 rounded-xl"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={() => {
              setShowDetails(false), setShowProjectCard(true);
            }}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-black-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
