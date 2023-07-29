import Image from "next/image";
import React from "react";
import { BsBriefcase } from "react-icons/bs";
import backgroundImg from "../../public/backgroundImg.png"
function SearchComponent() {
  return (
    <div className="grid relative place-items-center h-[18vh]  w-full   ">
      <Image
        src={backgroundImg}
        alt="Background Image"
        objectFit="cover"
        className="bg-no-repeat w-full h-full"

      />
      <div className="bg-white absolute flex items-center gap-2 lg:w-[50vw] md:w-[60vw] sm:w-[62vw] xs:w-[60vw] xxs:w-[69vw] py-1 px-1 rounded-sm">
        <div className="flex items-center w-full h-full px-5 gap-3">
          <BsBriefcase className="text-lg text-black/50 " />
          <input
            type="text"
            className=" w-full border-none outline-none truncate"
            placeholder="Title, companies,expertise or benefits"
          />
        </div>
        <button className="bg-[#1e86ff] py-2 lg:px-8 md:px-6 sm:px-5 xs:px-3 xxs:px-2 rounded-md text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;

/*
import React from "react";
import { BsBriefcase } from "react-icons/bs";

function SearchComponent() {
  return (
    <div className="grid place-items-center bg-backgroundsearch  bg-contain h-[18vh] bg-no-repeat w-full  border ">
      <div className="lg:bg-white md:bg-red-500 sm:bg-green-400 xs:bg-yellow-500 xxs:bg-pink-500 flex items-center gap-2 lg:w-[50vw] md:w-[60vw] sm:w-[62vw] xs:w-[60vw] xxs:w-[69vw] py-1 px-1 rounded-sm">
        <div className="flex items-center w-full h-full px-5 gap-3">
          <BsBriefcase className="text-lg " />
          <input
            type="text"
            className=" w-full border-none outline-none truncate"
            placeholder="Title, companies,expertise or benefits"
          />
        </div>
        <button className="bg-[#1e86ff] py-2 lg:px-8 md:px-6 sm:px-5 xs:px-3 xxs:px-2 rounded-md text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchComponent;


*/
