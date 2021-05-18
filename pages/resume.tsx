import React from "react";
import Bar from "../components/Bar";
import { Skills,frameWorks } from '../data'


const resume = () => {
  return (
    <div className="p-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-2xl">
          <h1 className="text-2xl font-bold font-Ubuntu">Recent Education</h1>
          <h2 className="pt-2 text-xl font-Averia">
            The Oxford College of Engineering
          </h2>
          <h3 className="pt-2 text-xl font-Averia">Mechatronics Engineering</h3>
          <h3 className="pt-2 text-xl font-Averia">Batch :- 2015-2019</h3>
        </div>
        <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-2xl">
          <h1 className="text-2xl font-bold font-Ubuntu">Current Job</h1>
          <h2 className="pt-2 text-xl font-Averia">Vegam Solutions Pvt Ltd.</h2>
          <h3 className="pt-2 text-xl font-Averia">Software Developer</h3>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="w-11/12">
        <h1 className="my-3 text-2xl font-bold font-Ubuntu">Languages</h1>
        {
          Skills.map((Skill) =>
            <Bar data={Skill} key={Skill.name}/>
          )
        }
        </div>
        <div className="w-11/12">
        <h1 className="my-3 text-2xl font-bold font-Ubuntu">Framework and Libraries</h1>
        {
          frameWorks.map((frameWork) =>
            <Bar  data={frameWork} />
          )
        }
        </div>
      </div>
    </div>
  );
};

export default resume;
