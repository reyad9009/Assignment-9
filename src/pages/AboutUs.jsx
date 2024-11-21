import React from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { PiSelectionPlusBold } from "react-icons/pi";
import { SiTransmission } from "react-icons/si";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-8 bg-gray-50 min-h-screen flex flex-col items-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-20">
          Welcome to <span className="font-bold text-xl text-[#2196f3]">Career kindle</span>, your trusted partner in
          navigating the journey toward a fulfilling career.
        </p>

        <div className="flex lg:flex-row flex-col gap-10">
          <div className="text-center flex flex-col justify-center items-center border-2 rounded-lg shadow-xl w-[22rem] lg:w-[30rem] py-10 px-8">
            <SiTransmission className="text-9xl text-[#2196f3]" />
            <h2 className="text-3xl font-bold mt-6 py-5">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              To empower individuals with the knowledge, skills, and confidence
              needed to make informed career decisions and excel in their chosen
              paths.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center border-2 rounded-lg shadow-xl w-[22rem] lg:w-[30rem] py-10 px-8">
            <PiSelectionPlusBold className="text-9xl text-[#2196f3]" />
            <h2 className="text-3xl font-bold mt-6 py-5">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              <li>A user-friendly platform accessible to everyone</li>
              <li>Both free and premium services to suit diverse needs</li>
              <li>A dedicated team passionate about your success</li>
            </ul>
          </div>
          <div className="text-center flex flex-col justify-center items-center border-2 rounded-lg shadow-xl w-[22rem] lg:w-[30rem] py-10 px-8">
            <MdOutlineLocalOffer className="text-9xl text-[#2196f3]" />
            <h2 className="text-3xl font-bold mt-6 py-5">What We Offer</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 mb-4">
              <li>Tailored Career Advice</li>
              <li>Professional Guidance</li>
              <li>Comprehensive Resources</li>
              <li>Skill Development</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
