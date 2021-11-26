import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const Service = ({ service }) => {
  const { key, img, title, desc, rating, ratingCount } = service;
  return (
    <Col sm={12} md={6} lg={4}>
        <div className="m-2">
          <Card className="mx-auto" style={{ width: "20rem" }}>
            <Card.Img variant="top" className="img-fluid" src={img} />
            <Card.Body className="my-1 py-1">
              <Card.Title><h1>{title}</h1></Card.Title>
              <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Body className="my-1 py-1">
              <Row>
                <Col>
                  <Rating
                    initialRating={rating}
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
                  <span>{rating}</span>
                </Col>
                <Col>Total review {ratingCount}</Col>
              </Row>
            </Card.Body>
            <Card.Body className="d-flex">
              <NavLink
                to={`/services/${key}`}
                className="btn btn-primary w-100 me-1" style={{backgroundColor:"indigo"}}
              >
                View Details
              </NavLink>
            </Card.Body>
          </Card>
        </div>
    </Col>
  );
};

export default Service;
