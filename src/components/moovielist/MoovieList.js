import React from "react";
import { Outlet } from "react-router-dom";
import MoovieItem from "../movieItem/MoovieItem";
import "./MoovieList.css";

function MoovieList(props) {
  return (
    <div className="App">
      <h1 style={{ marginTop: "5rem", color: "#55D284" }}> Moovies List</h1>
      <div className="movies-list">
        {props.Mymovies.filter((elt) =>
          props.rate && !props.search
            ? elt.rate === props.rate
            : props.search && !props.rate
            ? elt.title.toLowerCase().includes(props.search)
            : props.rate && props.search
            ? elt.title.toLowerCase().includes(props.search) &&
              elt.rate === props.rate
            : elt.title.toLowerCase().includes(props.search)
        ).map((elt) => {
          return <MoovieItem key={elt.id} {...elt} />;
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default MoovieList;
