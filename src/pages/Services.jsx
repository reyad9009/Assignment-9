import React, { useEffect, useState } from "react";
import ServicesCard from "../pages/ServicesCard";
import { useLoaderData, useParams } from "react-router-dom";

const Services = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [services, setServices] = useState([]);

  useEffect(() => {
    if (data) {
      // Check if data is defined
      if (category) {
        const filteredByCategory = data.filter(
          (service) => service.category === category
        );
        setServices(filteredByCategory);
      } else {
        setServices(data);
        console.log(data);
      }
    }
  }, [category, data]);

  if (!services) return <div>Loading...</div>; // Optional: show loading if services is not defined

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
      {services.map((service, service_id) => (
        <ServicesCard key={service_id} service={service} />
      ))}
    </div>
  );
};

export default Services;
