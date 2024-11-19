import React from 'react';

const ServicesCard = ({ service }) => {
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={service.image}  // Assuming each service has an image field
                    alt={service.service_name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{service.service_name}</h2>
                <p>{service.brief_description}</p>
                <p>Price: {service.pricing}</p>
                <p>Counselor: {service.counselor}</p>
                <p>Rating: {service.rating}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
