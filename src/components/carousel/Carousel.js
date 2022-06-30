import React from "react";
import { Carousel } from "react-bootstrap";

function carousel() {
  return (
    <div>
      <Carousel>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://blog.ipleaders.in/wp-content/uploads/2020/10/film.jpg"
            alt="Second slide"
            style={{ height: "30rem" }}
          />

          
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
}

export default carousel;
