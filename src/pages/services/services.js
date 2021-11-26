import React from "react";
import { Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth.js";
import Service from "../service/service";

const Services = () => {
  const { services } = useAuth();

  return (
    <div className="py-5 mt-5 " style={{backgroundColor:"#2B3856"}} >
      <div className="text-center text-white">
          <h1> Our All Services</h1>

          <p className="mb-0">
            Here you can find our all latest Medical. Choose some of them and
            get your best treatment online.
          </p>
      </div>

      <Container>
        <div className="my-3 d-flex flex-wrap justify-content-between ">
          <Row>
            {services.map((service) => (
              <Service key={service.key} service={service} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
