import React from "react";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const WhyCourse = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-40">
      <h1 className="text-4xl font-bold">Why Career kindle</h1>
      <p className="text-lg mt-3 mb-16">GROW YOUR KNOWLEDGE AND STAY AHEAD OF KNOWLEDGE-ECONOMY</p>
      <div className="flex flex-row gap-10">

        <div className="p-10  w-[25rem] gap-5 flex flex-col justify-center items-center border rounded-xl shadow-lg">
          <VscWorkspaceTrusted className="text-9xl text-[#2196f3]"/>
          <h1 className="text-2xl font-bold">TRUSTED KNOWLEDGE</h1>
          <p className="text-center ">
            Course is designed for global practice & real data & cases with
            practical learning
          </p>
        </div>

        <div className=" p-10 flex w-[25rem] gap-5 flex-col justify-center items-center border rounded-xl shadow-lg">
          <MdOutlineAccessTime className="text-9xl text-[#2196f3]" />
          <h1  className="text-2xl font-bold">TRUSTED KNOWLEDGE</h1>
          <p className="text-center">
            Course is designed for global practice & real data & cases with
            practical learning
          </p>
        </div>

        <div className="p-10 flex w-[25rem] gap-5 flex-col justify-center items-center border rounded-xl shadow-lg">
        <FaPeopleGroup className="text-9xl text-[#2196f3]"/>
          <h1  className="text-2xl font-bold">TRUSTED KNOWLEDGE</h1>
          <p className="text-center">
            Course is designed for global practice & real data & cases with
            practical learning
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyCourse;
