import React from "react";
import Hero from "../components/Hero/Hero";

function contact() {
  return (
    <div>
      <Hero
        heading="Contact"
        message="Submit the form bellow for more work and quotes"
      />
      <div className="max-w-[1240px] mx-auto p-4 h-screen">
        <h1 className="text-2xl font-bold text-center p-4">
          Lets work together
        </h1>
        <form className="max-w-[680px] mx-auto">
          <div className="grid grid-cols- gap-2">
            <input
              type="text"
              className="border shadow-lg p-3"
              placeholder="Name"
            />
            <input
              type="email"
              className="border shadow-lg p-3"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="border shadow-lg p-3 w-full my-2 "
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="border shadow-lg p-3 w-full "
            placeholder="Message"
          ></textarea>
          <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default contact;
