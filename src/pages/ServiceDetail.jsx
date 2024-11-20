import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Comment from "../pages/Comment";

const ServiceDetail = () => {
  const data = useLoaderData();
  const { service_id } = useParams();
  const id = parseInt(service_id);

  const service = [...data].find((service) => service.service_id === id);
  const {
    service_name,
    category,
    pricing,
    brief_description,
    duration,
    counselor,
    rating,
    image,
  } = service;

  return (
    <div>
      <div>
        <h1 className="text-center text-4xl font-extrabold mb-14">
          Service Details
        </h1>
      </div>
      <div className="flex justify-center items-start gap-40">
        <div className="card card-compact w-[40rem] h-auto flex flex-col border">
          <figure className="flex justify-center items-center">
            <img className="w-[90%] rounded-xl" src={image} alt={service_name} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-5 my-5">
            <span className="card-title text-4xl font-bold">
              {service_name}
            </span>
            <span className="text-xl font-semibold">{category}</span>
            <span className="text-xl font-semibold">{duration}</span>
            <span className="text-xl font-semibold">Price : {pricing}</span>
            <span className="text-xl font-semibold">
              Counselor: {counselor}
            </span>
            <span className="font-bold text-xl">Rating ⭐</span>
            <div className="flex gap-5 items-center">
              <Rating style={{ maxWidth: 150 }} readOnly value={rating} />
              <span>{rating}</span>
            </div>
            <p className="text-xl font-semibold">{brief_description}</p>
            <div className="card-actions justify-start">
              <button className="btn bg-orange-500 px-10 text-xl">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
        <Comment></Comment>
      </div>
    </div>
  );
};

export default ServiceDetail;
