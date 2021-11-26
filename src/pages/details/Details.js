import React from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const { key } = useParams();
  const { services } = useAuth();
  const matchingService = services.find((service) => service.key === Number(key));
  return (
    <div className="mt-5 py-5" style={{backgroundColor:"#2B3856"}} >
      {matchingService?.title ? (
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={6}>
              <img className="img-fluid" src={matchingService.img} alt="" />
            </Col>
            <Col md={6} className="d-flex justify-content-center flex-column">
              <h1 className="text-primary fw-bold">{matchingService.title}</h1>
              <h5 className="text-success" >{matchingService.desc}</h5>
              <Row>
                <Col>
                  <div className="my-2">
                    <Rating 
                      initialRating={matchingService.rating}
                      readonly
                      emptySymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={emptyStar}
                        />
                      }
                      fullSymbol={
                        <FontAwesomeIcon
                          className="text-warning"
                          icon={fullStar}
                        />
                      }
                    />
                    <span> {matchingService.rating}</span>
                    <p className="mb-3 text-secondary">
                      Total Review: {matchingService.ratingCount}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      ) : (
        <div className="my-5 py-1">
          <h1 className="my-5 p-5 text-center">NO service Found</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
