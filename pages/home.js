import Image from "next/image";
import React from "react";

function home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image
            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
            layout="fill"
            objectFit="contain"
            alt=""
          />
          test
        </div>
      </header>
    </div>
  );
}

export default home;
