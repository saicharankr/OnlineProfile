import Image from "next/image";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from 'next-themes';



const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme == "light"?"dark":"light")
  }

  return (
    <div>
      <Image
        src="/ProfilePic.jpg"
        alt="User Profile Pic"
        width={200}
        height={200}
        className="mx-auto rounded-full w-25 h-25"
      />
      <h1 className="my-4 text-2xl font-medium tracking-wider font-Kaushan">
        <span>Kr Sai charan</span>
      </h1>
      <h2 className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200 font-Ubuntu">
        Full Stack Web Developer
      </h2>
      <a href="/Resume.pdf" target="_blank" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-black-200 font-Averia" download>
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-600 md:w-full">
        <a href="https://github.com/saicharankr" target="_blank">
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/saicharan-kr/" target="_blank">
          <AiFillLinkedin className="w-8 h-8" />
        </a>
        <a href="https://medium.com/@saicharan.kr1" target="_blank">
          <AiFillMediumCircle className="w-8 h-8" />
        </a>
      </div>

      <div className="px-2 py-1 my-3 bg-gray-200 dark:bg-black-200 rounded-2xl " style={{marginLeft:"-1rem" , marginRight:"-1rem"}}>
        <div className="flex items-center justify-center space-x-2 font-Averia">
          <GoLocation />
          <span>Bengaluru,Karnataka,India</span>
        </div>
        <p className="my-2 italic font-Averia">saicharan.kr1@gmail.com</p>
        <p className="my-2 italic font-Averia">9380177616</p>
      </div>
      <button onClick={() => window.open('mailto:saicharan.kr1@gmail.com')} className="w-8/12 px-5 py-2 my-2 italic text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400 font-Averia">Email Me</button>
      <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 italic text-white rounded-full focus:outline-none bg-gradient-to-r from-green-400 to-blue-400 font-Averia"> Switch Theme</button>
    </div>
  );
};

export default Sidebar;
