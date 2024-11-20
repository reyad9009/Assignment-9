import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const {image, service_name, category, pricing, counselor, service_id } = service;
  return (
    <div className="card card-compact lg:w-[25rem] w-[23rem] h-[30rem] flex flex-col border bg-slate-400">
      <figure className="w-[400px] h-[300px]">
        <img
          className="w-[400px]"
          src={image}
          alt={service_name}
        />
      </figure>
      <div className="card-body flex flex-grow justify-end">
        <span className="card-title">{service_name}</span>
        <span>{category}</span>
        <span>Price: {pricing}</span>
        <span>counselor: {counselor}</span>
        <div className="card-actions justify-start">
          <Link to={`/services/${service.service_id}`}>
         <button className="px-6 py-3 font-bold rounded-full text-[#b574eb] border border-[#b574eb]">
            Learn More
          </button>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
