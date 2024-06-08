import React from "react";
import { Meteors } from "../ui/meteors";
 
export function VisionCard({img, title, description, style, fontSize} : {
    img: string, title: string, description: string, style: string, fontSize: string
}) {
  return (
    <div className={style}>
      <div className=" w-full relative h-full lato">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-green-50 border border-greenPrimary  px-4 py-16 h-full overflow-hidden rounded-2xl flex flex-col justify- items-center">
         <img src={img} className="w-16 h-16"/> 
         <h1 className={`${fontSize} text-greenPrimary mt-6`}>{title}</h1>
         <p className="text-gray-800 text-xl mt-6 text-center">
         {description}
         </p>
          {/* Meaty part - Meteor effect */}
          <Meteors number={40} />
        </div>
      </div>
    </div>
  );
}
