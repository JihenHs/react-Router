import React, { useState } from "react";
import { Button, Modal, FormControl, Form } from "react-bootstrap";
import "./AddMoovie.css";

function AddMoovie(props) {
  const [show, setShow] = useState(false);
  const [newMoovie, setNewMoovie] = useState({
    title: "Moovie Title",
    cover:
      "https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg",
    category: "N/A",
    cast: "N/A",
    rate: "N/A",
    release: "N/A",
    id: Math.random(),
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    setNewMoovie({
      ...newMoovie,
      [e.target.name]: e.target.value,
      id: Math.random(),
    });
  };

  const handleSave = () => {
    if (
      newMoovie.titlte != "Moovie Title" &&
      newMoovie.cover !=
        "https://i.pinimg.com/originals/aa/f7/05/aaf705e06726ce3881288ae4be3ac5fe.jpg" &&
      newMoovie.category != "N/A" &&
      newMoovie.cast != "N/A" &&
      newMoovie.release != "N/A" &&
      newMoovie.rate < 7
    ) {
      props.setMyMovies([...props.Mymovies, newMoovie]);
      handleClose();
    } else {
      alert("fill fileld plz");
    }
  };

  return (
    <>
      <h2 style={{ color: "#55D284", marginTop: "2rem" }}>
        Welcome to Moovie Shop
      </h2>

      <Button
        style={{ backgroundColor: "white", color: "black", marginTop: "4rem" }}
        onClick={handleShow}
      >
        Add Moovie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Movie...</Modal.Title>
        </Modal.Header>
        <Modal.Body className="InputArea">
          <Form onChange={(e) => handleChange(e)}>
            <FormControl
              type="text"
              placeholder="Type Moovie's Title"
              name="title"
              className="me-2"
              autoFocus
            />
            <FormControl
              type="text"
              placeholder="Type Moovie's Category"
              className="me-2"
              name="category"
              autoFocus
            />
            <FormControl
              type="Number"
              placeholder="Add Moovie's Rating"
              className="me-2"
              as="select"
              name="rate"
              autoFocus
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </FormControl>
            <FormControl
              type="text"
              placeholder="Add Moovie's cover"
              className="me-2"
              name="cover"
              autoFocus
            />
            <FormControl
              type="text"
              placeholder="Add Moovie's cast"
              className="me-2"
              name="cast"
              autoFocus
            />
            <FormControl
              type="text"
              placeholder="Add Moovie's release"
              className="me-2"
              name="release"
              autoFocus
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSave()}>
            Save Moovie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMoovie;
