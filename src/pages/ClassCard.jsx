import React from "react";

const ClassCard = ({ classCard }) => {
  const { service_id, service_name, duration, counselor, image } = classCard;
  return (
    <div className="flex justify-stretch gap-16 p-6 border rounded-xl">
      <figure>
        <img src={image} className="w-[600px] rounded-lg" />
      </figure>

      <div className="flex items-center w-[100%] justify-between">
        <div className="">
          <span className="card-title text-3xl ">{service_name}</span>
          <span className="card-title py-4">Counselor: {counselor}</span>
          <span>Time : {duration}</span> <br />
          <button className="btn bg-[#2196f3] mt-4 text-white text-lg">
            Continue Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
