import React from "react";
import Bg from "../../assets/images/bg.jpg";
import { Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";
import Service from "../service/service.js";

const Home = () => {
  const { services } = useAuth();
  return (
    <div>
      <div className="img-fluid mt-5 pt-5"
        style={{
          background: `url(${Bg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          width: "100%",
        }}
      >
        <Container>
          <div
            className="img-fluid d-flex mt-5 py-5 justify-content-center align-items-center "
          >
            <div className="text-center my-5 py-5">
                <div>
                <h1 className="fw-bold" style={{color:"indigo"}}>Welcome to Medicare Home</h1>
                <p className="my-4  fs-5">
                "Medicare Home" has provided the best in health care and the latest in medical technology to the people.
                </p>
                </div>

                <NavLink
                  to="/services"
                  className="rounded-pill btn btn-primary fs-5 py-2 px-4" style={{backgroundColor:"indigo"}}
                >
                  View services
                </NavLink>
            </div>
          </div>
        </Container>
      </div>

      <div 
        id="feature"
        className="py-5" style={{backgroundColor:"#2B3856"}}
      >
        <div className="text-center text-white">
            <h1>Our Feature services</h1>

            <p className="mb-0">
              Here you can find our all latest services. Choose some of them and
            find your best treatment Online.
            </p>
        </div>

        <Container>
          <div className="my-3 d-flex flex-wrap justify-content-between">
            <Row>
              {services.slice(0, 6)?.map((services) => (
                <Service key={services.key} service={services} />
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Home;
