import { GetStaticPropsContext } from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

function index() {
  return (
    <div className="flex flex-col">
      <div className="px-3">
        <h5 className="font-medium text-justify font-Ubuntu">
          I am a machine learning enthusiast and a full stack web developer.
          Passionate to do something amazing, always ready to learn and implement
          new techniques and technologies. I love to code, read books and
          sometimes to write short stories. I enjoy writing technical content. I
          am always ready to teach and share the knowledge I own. Being an
          optimist , am always open to accept the surprises that life offers to me
          and I give my best to solve the problems rather than avoiding them.
        </h5>
      </div>
      <div className="flex flex-col p-4 mt-3  dark:bg-black-200">
        <div className="py-2">
          <h1 className="text-2xl font-bold  font-Averia text-center">
            What I offer ?
          </h1>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 grid-cols-1">
          {services.map((service) => (
            <div className="bg-gray-300 rounded-lg dark:bg-black-100 sm:col-span-1">
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
