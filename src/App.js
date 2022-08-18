import React from "react";
import { Routes, Route } from "react-router-dom";
import Board from "./Board";
import Home from "./Home.js";
import "./App.css";

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/easy" element={<Board nRows={3} nCols={3} />} />;
            <Route path="/medium" element={<Board nRows={4} nCols={4} />} />;
            <Route path="/hard" element={<Board nRows={5} nCols={5} />} />;
         </Routes>
      </div>
   );
}

export default App;
