import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feedback from "../components/Feedback";
import "../styles/globals.css";
import {ThemeProvider} from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="grid grid-cols-12 gap-6 px-5 lg:px-48 my-14 ">
        <div className="col-span-12 p-4 text-center bg-white dark:bg-black-300 lg:col-span-3 rounded-2xl">
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white lg:col-span-9 rounded-2xl dark:bg-black-700">
          <Navbar />
          <Component {...pageProps} />
        </div>
        <div className="col-span-12 p-4 text-center bg-white rounded-2xl dark:bg-black-300">
          <Feedback />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
