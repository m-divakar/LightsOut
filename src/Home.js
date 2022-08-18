import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";
import "./Home.css";

const Home = () => {
   return (
      <>
         <div className=" title home">
            <div className="neon-green">
               <Link to="/easy">Easy</Link>
            </div>
            <div className="neon-blue">
               <Link to="/medium">Medium</Link>
            </div>
            <div className="neon-orange">
               <Link to="/hard">Hard</Link>
            </div>
            <p style={{ fontSize: "20px" }}>
               Instructions: When a tile is clicked, It along with it's
               neighbors in all 4 cardinal directions will flip to the opposite
               state. Turn off all the tiles to win.
            </p>
         </div>
      </>
   );
};

export default Home;
