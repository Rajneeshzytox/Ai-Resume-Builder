import { useState } from "react";

const Slider = ({ src }) => {
  const [position, setposition] = useState(0);

  const next = () => {
    setposition((p) => (p === src.length - 1 ? 0 : p + 1));
  };

  const previous = () => {
    setposition((p) => (p === 0 ? src.length - 1 : p - 1));
  };

  return (
    <div className="relative md:w-[calc(288px*2)] overflow-clip w-72">
      <ul className="img-cont h-full w-fit flex items-center *:aspect-[1/1.414]">

      {/* rendering through props */}
        {
        src.map((res, index) => (
          <li
            key={index}
            className="w-72 transition-all size-full ease-out duration-700"
            style={{ transform: `translateX(-${position * 100}%)` }}
          >
            <img
              className="size-full"
              src={res}
              alt={`Slider Image ${index}`}
            />
          </li>
        ))
        }
         <div className="right-0 w-1/2 bg-primary h-full absolute -z-10  flex-col justify-center items-center gap-4 flex">
           <h2 className="text-lg font-semibold">Create Your Resume</h2>
           <a className="text-3xl ring rounded-full aspect-square flex items-center justify-center p-3">
            <i className="fa-solid fa-plus fa-beat"></i>
           </a>
         </div>
      </ul>

      <div className="slidr-btn top-[50%] absolute flex justify-between items-center w-full">
        <button
          onClick={previous}
          className="shadow-lg btn rounded-full hover:bg-primary hover:text-primary-content bg-slate-200 aspect-square text-primary border-none"
          aria-label="Previous Slide"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button
          onClick={next}
          className="shadow-lg btn rounded-full hover:bg-primary hover:text-primary-content bg-slate-200 aspect-square text-primary border-none"
          aria-label="Next Slide"
        >
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
