import Image from "next/image";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { InstagramImages } from "../InstagramImages";

const Instagram = (props) => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Capture</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg-grid-cols-6 gap-22 p-4">
        {InstagramImages.map((image, index) => {
          return (
            <div key={index} className="relative">
              <Image
                src={image.image}
                alt="/"
                className="w-full h-full"
                layout="responsive"
                priority
              />

              <div className="flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group">
                <p className="text-gray-300 hidden group-hover:block">
                  <FaInstagram size={50} className="z-10" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Instagram;
