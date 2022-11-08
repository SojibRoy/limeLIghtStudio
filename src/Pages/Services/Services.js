import React, { useEffect, useState } from "react";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
  return (
    <div className="container">
      <h3>Services</h3>
      <div>
        <h2>services : {services.length}</h2>
      </div>
    </div>
  );
};

export default Services;
