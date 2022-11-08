import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./Routes/nav/nav.component";
import Home from "./Routes/home/home.component";
import Album from "./album/album.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav></Nav>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="album" element={<Album></Album>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
