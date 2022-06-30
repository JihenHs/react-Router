import React from "react";
import { Link } from "react-router-dom";
import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
export default function MoovieItem({
  title,
  cover,
  category,
  rate,
  cast,
  release,
  description,
}) {
  return (
    <div style={{ width: "22rem" }}>
      <Card style={{ width: "18rem", marginTop: "5rem" }}>
        <Card.Img variant="top" src={cover} style={{ height: "25rem" }} />

        <ListGroup className="list-group-flush">
          <ListGroupItem style={{ background: "gray" }}>{title}</ListGroupItem>

          <ListGroupItem style={{ background: "gray" }}>
            Category: {category}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Rating: {rate}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Cast: {cast}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            Release: {release}
          </ListGroupItem>
          <ListGroupItem style={{ background: "gray" }}>
            <Button variant="primary">
              <Link to={`/MoovieList/${title}`} style={{ color: "white" }}>
                {" "}
                More Details
              </Link>
            </Button>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
}
