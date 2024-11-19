import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            {
                services.map((service) => <ServicesCard key={service.service_id} service={service}></ServicesCard>)
            }
        </div>
    );
};

export default Services;