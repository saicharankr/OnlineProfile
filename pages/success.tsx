import Link from "next/link";
import React from "react";

const success = () => {
  return (
    <div>
      <div className="my-15">
        <h1 className="font-bold text-center font-Ubuntu">
          You have Successfully submitted the form 😊✔ !!
        </h1>
        <h1 className="text-5xl font-bold text-center mt-52 font-Ubuntu">
          Thank You for contacting me,I will reach out you soon !!☺🚀
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <div className="w-auto px-5 py-2 my-2 text-4xl italic text-center text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400 font-Averia">
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
