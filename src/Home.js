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
         </div>
      </>
   );
};

export default Home;
