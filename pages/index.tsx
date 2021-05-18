import { GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col flex-grow px-4 pt-1">
      <h5 className="my-3 font-medium text-justify font-Ubuntu">
        I am a machine learning enthusiast and a full stack web developer.
        Passionate to do something amazing, always ready to learn and implement
        new techniques and technologies. I love to code, read books and
        sometimes to write short stories. I enjoy writing technical content. I
        am always ready to teach and share the knowledge I own. Being an
        optimist , am always open to accept the surprises that life offers to me
        and I give my best to solve the problems rather than avoiding them.
      </h5>
      <div className="flex flex-col items-center h-full p-4 mt-5 bg-gray-300 dark:bg-black-200" style={{marginLeft:'-1rem',marginRight:'-1rem'}}>
        <h1 className="p-4 mt-2 text-2xl font-bold tracking-wide font-Averia">
          What I offer ?
        </h1>
        <div className="grid gap-6 overflow-y-scroll lg:grid-cols-2" style={{height:"40vh"}}>
          {services.map((service) => (
            <div className="bg-gray-100 rounded-lg dark:bg-black-100 sm:col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   console.log(res);
//   const data = await res.json();
//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
