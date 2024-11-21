import React, { useContext } from "react";
import { useOutletContext } from "react-router-dom";
import ClassCard from "./ClassCard";
import { AuthContext } from "../provider/AuthProvider";

const MyClass = () => {
  const { addToCard } = useOutletContext();
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="mb-16 mt-10">
        <span className="font-bold text-3xl">Welcome back </span>
        <span className="font-extrabold text-[#2196f3] text-3xl">{user?.displayName}</span>
      </h1>
      <div className="flex flex-col gap-10">
        {addToCard.map((service, service_id) => (
          <ClassCard key={service_id} classCard={service}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default MyClass;
