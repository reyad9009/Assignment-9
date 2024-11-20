import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Comment from "../pages/Comment";
import { Helmet } from "react-helmet-async";

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
      <Helmet><title>Career Kindle | Services Details</title></Helmet>
      <div>
        <h1 className="text-center text-4xl font-extrabold mb-7">
          Service Details
        </h1>
      </div>
      <div className="flex justify-center items-start gap-40">
        <div className="card card-compact w-[30rem] h-auto flex flex-col border">
          <figure className="flex justify-center items-center">
            <img className="w-[100%] rounded-t-lg" src={image} alt={service_name} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-5 my-5">
            <span className="card-title text-3xl font-bold">
              {service_name}
            </span>
            <span className="text-lg font-semibold">{category}</span>
            <span className="text-lg font-semibold">{duration}</span>
            <span className="text-lg font-semibold">Price : {pricing}</span>
            <span className="text-lg font-semibold">
              Counselor: {counselor}
            </span>
            <span className="font-bold text-lg">Rating ⭐</span>
            <div className="flex gap-5 items-center">
              <Rating style={{ maxWidth: 120 }} readOnly value={rating} />
              <span className="text-lg">{rating}</span>
            </div>
            <p className="text-lg font-semibold">{brief_description}</p>
            <div className="card-actions justify-start">
              <button className="btn bg-[#2196f3] px-10 text-lg text-white">
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
