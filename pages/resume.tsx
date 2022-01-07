import Link from "next/link";
import React from "react";
import Bar from "../components/Bar";
import { Skills, frameWorks, ResumeDetails } from '../data'


const resume = () => {
  return (
    <div className="p-4">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-2xl">
          <h1 className="text-2xl font-bold font-Ubuntu">Recent Education</h1>
          <h2 className="pt-2 text-xl font-Averia">
            {ResumeDetails.college_name}
          </h2>
          <h3 className="pt-2 text-xl font-Averia">{ResumeDetails.engineering_branch}</h3>
          <h3 className="pt-2 text-xl font-Averia">{ResumeDetails.engineering_batch}</h3>
        </div>
        <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-2xl">
          <h1 className="text-2xl font-bold font-Ubuntu">Current Job</h1>
          <h2 className="pt-2 text-xl font-Averia">{ResumeDetails.current_job}</h2>
          <h3 className="pt-2 text-xl font-Averia">{ResumeDetails.job_title}</h3>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="w-full">
          <h1 className="my-3 text-2xl font-bold font-Ubuntu">Languages</h1>
          {
            Skills.map((Skill) =>
              <Bar data={Skill} key={Skill.name} />
            )
          }
          <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-lg mt-2" >
            <div>
              <h1 className="font-semibold font-Ubuntu text-lg">Detailed Resume :- </h1>
            </div>
            <div className="font-Averia font-semibold text-lg underline">
              <Link href="/pdfResume"> Click here</Link>
            </div>
          </div>

        </div>
        <div className="w-full">
          <h1 className="my-3 text-2xl font-bold font-Ubuntu">Framework and Libraries</h1>
          {
            frameWorks.map(({ id, technology, frameworks }) => {
              return (
                <div className="p-4 bg-gray-300 dark:bg-black-200 rounded-lg mt-2" key={id}>
                  <div>
                    <h1 className="font-semibold font-Ubuntu text-lg">{technology}</h1>
                  </div>
                  <div>
                    <h1 className="font-Averia text-sm font-normal">{frameworks}</h1>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default resume;
