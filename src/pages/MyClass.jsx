import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import ClassCard from "./ClassCard";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  const { addToCard } = useOutletContext();
  const { user } = useContext(AuthContext);
  return (
    <div>
        <Helmet><title>Career Kindle | My Classes</title></Helmet>
      <h1 className="lg:mb-16 mb-6 lg:mt-10 ml-5 lg:ml-0">
        <span className="font-bold text-3xl">Welcome back </span>
        <span className="font-extrabold text-[#2196f3] text-3xl">{user?.displayName}</span>
      </h1>
      <div className="flex flex-col items-center lg:items-start gap-10">
        {addToCard.map((service, service_id) => (
          <ClassCard key={service_id} classCard={service}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
