import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { image, service_name, category, pricing, counselor, service_id } =
    service;
  return (
    <div>
      <div className="card card-compact w-[30rem] h-[35rem] flex flex-col border">
        <figure className="">
          <img className="w-[100%]" src={image} alt={service_name} />
        </figure>
        <div className="card-body flex flex-grow justify-end ml-4">
          <span className="card-title font-bold text-2xl">{service_name}</span>
          <span className="font-semibold text-base">{category}</span>
          <span className="font-semibold text-base">Price: {pricing}</span>
          <span className="font-semibold text-base">Counselor: {counselor}</span>
          <div className="card-actions justify-start">
            <Link to={`/services/${service.service_id}`}>
              <button className="px-6 py-3 font-bold rounded-full text-[#b574eb] border border-[#b574eb] mt-2 mb-4">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
