import Image from "next/image";
import React from "react";
import { PortfolioImages } from "../PortfolioImages";

function Portfolio() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 text-center">
      <h1 className="font-bold text-2xl p-4 ">Travel Photos</h1>
      <div className="grid grid-rows-none md:grid-cols-5 p-5 gap-4">
        <div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
          <Image
            src={PortfolioImages[0].image}
            alt="/"
            layout="responsive"
            width="677"
            height="451"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={PortfolioImages[1].image}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={PortfolioImages[2].image}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
        </div>
        <div className="w-full h-full">
          <Image
            src={PortfolioImages[3].image}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
        </div>
   
        <div className="w-full h-full">
          <Image
            src={PortfolioImages[4].image}
            alt="/"
            layout="responsive"
            width="215"
            height="217"
            objectFit="cover"
          />
        </div>
   
      </div>
    </div>
  );
}

export default Portfolio;
