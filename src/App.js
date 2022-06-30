import "./App.css";
import React, { useState } from "react";
import MoovieList from "./components/moovielist/MoovieList";
import MyNavBar from "./components/navbar/MyNavBar";
import Carousel from "./components/carousel/Carousel";
import data from "./data";
import AddMoovie from "./components/addmoovie/AddMoovie";
import Description from "./components/Description";
import { Routes, Route } from "react-router-dom";

function App() {
  const [Mymovies, setMyMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState(0);

  return (
    <div className="App">
      <div className="header-App">
        <MyNavBar setSearch={setSearch} setRate={setRate} rate={rate} />
        <Carousel />
        <AddMoovie Mymovies={Mymovies} setMyMovies={setMyMovies} />

        <Routes>
          <Route
            path="/"
            element={
              <MoovieList Mymovies={Mymovies} search={search} rate={rate} />
            }
          />
          <Route path="MoovieList/:MoovieTitle" element={<Description />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
