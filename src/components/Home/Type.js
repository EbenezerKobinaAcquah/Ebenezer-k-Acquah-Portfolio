import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import Particle from "../Particle";





function Type() {

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
    <Typewriter
      options={{
        strings: [
          "AI Engineer",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Freelancer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
     
        <Particle />
        
          


       
      
    </div>
  );
}

export default Type;
