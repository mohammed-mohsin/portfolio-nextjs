import Head from "next/head";
import React from "react";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

function work() {
  return (
    <div>
      <Head>
        <title>Portfolio | Photography</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Hero
        heading="My Work"
        message="This is some of my recent work traveling the world"
      />
      <Portfolio />
    </div>
  );
}

export default work;
