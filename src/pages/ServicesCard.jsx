import React from "react";

const ServicesCard = ({ service }) => {
  return (
    <div className="card card-compact lg:w-[25rem] w-[23rem] h-[30rem] flex flex-col border bg-slate-400">
      <figure className="w-[400px] h-[300px]">
        <img
          className="w-[400px]"
          src={service.image}
          alt={service.service_name}
        />
      </figure>
      <div className="card-body flex flex-grow justify-end">
        <span className="card-title">{service.service_name}</span>
        <span>{service.category}</span>
        <span>Price: {service.pricing}</span>
        <span>counselor: {service.counselor}</span>
        <div className="card-actions justify-start">
          <button className="px-6 py-3 font-bold rounded-full text-[#b574eb] border border-[#b574eb]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
