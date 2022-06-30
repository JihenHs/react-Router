import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

import "./MyNavBar.css";

import {
  Button,
  Nav,
  Navbar,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
function MyNavBar(props) {
  const [rating, setRating] = useState(0);

  const handleChange = (event) => {
    props.setSearch(event.target.value.toLowerCase());
  };

  const ratingChanged = (newRating) => {
    props.setRate(newRating);
  };

  const handleReset = (e) => {
    window.location.reload();
    props.setRate(0);
  };
  return (
    <div >
      <Navbar expand="lg" className="Mynav">
        <Container fluid>
          <Navbar.Brand style={{ color: "#55D284", fontSize: "2rem" }} href="#">
            Moovie Shop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <ReactStars
                count={7}
                onChange={(newRating) => ratingChanged(newRating)}
                size={25}
                activeColor="#ffd700"
                color="white"
              />{" "}
              <Button
                variant="outline-light"
                as="input"
                type="reset"
                value="Reset"
                onClick={() => handleReset()}
              />
            </Nav>

            <Form className="d-flex">
              <FormControl
                type="search"
                style={{ backgroundColor: "white" }}
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(event) => handleChange(event)}
              />
              {/*<Button variant="outline-primary">Search</Button>*/}
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavBar;
