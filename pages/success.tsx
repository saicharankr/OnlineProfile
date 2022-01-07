import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <div  className="grid h-screen place-content-center">
      <div>
        <h1 className="text-xl font-bold text-center font-Ubuntu">
          Thank You for contacting me,I will reach out you soon !!☺🚀
        </h1>
      </div>
      <div className="flex  justify-center cursor-pointer">
        <div className="w-1/2 px-5 py-2 my-2 text-4xl italic text-center text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400 font-Averia">
          <Link href="/">
            <a>
              <span className="text-center text-black-500 dark:text-white">
                Home
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default success;
