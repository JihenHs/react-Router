import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Description() {
  let { MoovieTitle } = useParams();
  console.log(MoovieTitle);

  let moovie = data.find((moovie) => moovie.title.includes(MoovieTitle));
  console.log(moovie);
  let { description ,trailer } = moovie;
  return (
    <div className="container d-flex h-100">
      <div className="row align-self-center">
        <Alert variant="success" style={{ width: "80rem", marginTop: "20px" }}>
          <Alert.Heading style={{ textAlign: "left" }}>
            Description:
          </Alert.Heading>
          <p style={{ textAlign: "left", color: "black" }}>{description}</p>
          <hr />
          <p className="mb-0" style={{ width: "80rem", marginTop: "20px" }}>
            Trailer:
          </p>
          <iframe
            width="560"
            height="315"
            src={trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="d-flex justify-content-end">
            <Button variant="outline-success">
              <Link to="/">Back to home</Link>
            </Button>
          </div>
        </Alert>
      </div>
    </div>
  );
}

export default Description;
