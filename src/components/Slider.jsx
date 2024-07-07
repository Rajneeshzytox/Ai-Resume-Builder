import { useState } from "react";


const Slider = ({src}) => {
  // position of each li 
  const [position, setPosition] = useState(0);

  const next = () => setPosition((prePosition => (prePosition === src.length -1)? 0: prePosition + 1));
  const pre = () => setPosition((prePosition => (prePosition === 0)? src.length -1 : prePosition - 1));

  const liStyle = `w-72 transition-all size-full ease-out duration-700 -translate-x-[${position*100}%]`;

  return (
    
    <div className=" relative md:w-[calc(288px*2)] overflow-clip w-72 ">

        <ul className="img-cont h-full w-fit flex items-center *:aspect-[1/1.414]">
         { src.map((res, index) => 
            <li key={index} className={liStyle}>
              <img className="size-full" src={res} />
            </li>)
             
         }

        </ul>
        

        <div className="slidr-btn top-[50%] absolute flex justify-between items-center w-full">
           <button onClick={pre} className="shadow-lg btn rounded-full hover:bg-primary hover:text-primary-content bg-slate-200 aspect-square text-primary border-none"><i className="fa-solid fa-arrow-left"></i></button>
           <button className="shadow-lg btn rounded-full hover:bg-primary hover:text-primary-content bg-slate-200 aspect-square text-primary border-none" onClick={next}><i className="fa-solid fa-arrow-right"></i></button>
          
        </div>
       
    </div>
  )
}

export default Slider;
