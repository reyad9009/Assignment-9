import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = ({ selectedCategory }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then((res) => res.json())
            .then((data) => {
                if (selectedCategory === 'All') {
                    setServices(data);  // Show all services
                } else {
                    const filteredServices = data.filter(
                        (service) => service.category === selectedCategory
                    );
                    setServices(filteredServices);
                }
            });
    }, [selectedCategory]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
            {services.map((service) => (
                <ServicesCard key={service.service_id} service={service} />
            ))}
        </div>
    );
};

export default Services;
