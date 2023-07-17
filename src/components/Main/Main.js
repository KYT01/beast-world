import React from "react";
import "./Main.css";

import HornedBeast from "../HornedBeast/HornedBeast";


export default function Main() {
  return (
    <main>
      <HornedBeast 
      title="HORNED LIZARD"
      imgUrl="https://www.ndow.org/wp-content/uploads/2021/10/phrynosoma_platyrhinos-scaled.jpeg"
      description="If threatened by predators, horned lizards will squirt blood from the eyes. The squirting blood comes from ducts in the corners of their eyes and can travel a distance of up to three feet"
      />
      <HornedBeast 
      title="BLACK RHINO"
      imgUrl="https://cff2.earth.com/uploads/2022/04/14045415/Black-rhinos-960x640.png"
      description="Rhinos can reach speeds of up to 55kph. Black rhino can be very aggressive and will charge at anything that scares them."
      />
    </main>
  );
}