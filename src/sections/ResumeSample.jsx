import Slider from "../components/Slider";

const resume = [
  "https://i.ibb.co/sJ7q56q/download.jpg",
  "https://i.ibb.co/309KMyM/images.jpg",
  "https://i.ibb.co/7vt7PjS/download.jpg",
  "https://i.ibb.co/8mggmtL/images.jpg",
];

const ResumeSample = () => {
  return (
    <section
      id="resumeSection"
      className="overflow-hidden p-3 relative min-h-screen"
    >
      <div className="flex justify-center flex-col lg:absolute lg:top-[30%] lg:right-0 lg:backdrop-blur-lg lg:w-1/2 lg:py-8 z-10 lg:rounded-3xl mt-10 px-10 gap-4">
        <h2 className="text-3xl font-bold capitalize">
          Wide variety of{" "}
          <span className="bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent">
            Resume
          </span>{" "}
          template
        </h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing Necessitatibus
          voluptatibus delectus magni recusandae{" "}
        </p>

        <button className="glass btn w-fit bg-base-300 justify-center items-center gap-2 flex">
          Create Your Resume
          <a className="text-xs bg-primary rounded-full aspect-square flex items-center p-1 justify-center">
            <i className="fa-solid fa-plus fa-beat"></i>
          </a>
        </button>
      </div>

      <div className="mockup-window bg-base-300 border shadow w-[calc(290px*2)] hidden md:block top-24 z-0 relative">
        <Slider src={resume} />
      </div>

      <div className="mockup-phone md:hidden w-85 relative top-36 z-0">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 bg-slate-700">
            <Slider src={resume} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSample;
