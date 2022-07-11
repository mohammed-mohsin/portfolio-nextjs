import React from "react";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

function work() {
  return (
    <div>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world"
      />
      <Portfolio/>
    </div>
  );
}

export default work;
