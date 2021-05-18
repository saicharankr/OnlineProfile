const contactForm = () => {
  return (
    <div>
      <form netlify>
        <div className="w-full">
          <h1 className="p-4 text-2xl font-Ubuntu ">
            Drop me a <b>Message</b> here!!
          </h1>
          <div className="p-4">
            <label>
              <span className="p-6 my-4 text-xl font-bold font-Averia">
                Name
              </span>
              <input
                type="text"
                className="p-4 text-xl rounded-3xl dark:text-black-300 font-Ubuntu md:w-full"
              />
            </label>
          </div>
          <div className="p-4">
            <label>
              <span className="p-4 my-4 text-xl font-bold font-Averia">
                Email ID
              </span>
              <input
                type="text"
                className="p-4 text-xl rounded-3xl dark:text-black-300 font-Ubuntu md:w-full"
              />
            </label>
          </div>
          <div className="p-4">
            <label>
              <span className="p-4 my-4 text-xl font-bold font-Averia">
                Message
              </span>
              <textarea className="w-full p-4 text-xl rounded-3xl dark:text-black-300 font-Ubuntu h-60"></textarea>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="w-8/12 px-5 py-2 my-2 italic text-white rounded-full lg:w-5/12 bg-gradient-to-r from-green-400 to-blue-400 font-Averia">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default contactForm;
