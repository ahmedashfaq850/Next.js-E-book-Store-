import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[900px] mx-auto my-5 rounded-md p-2">
      <Image src="/bookBanner.png" alt="Banner" width={1000} height={300} />
    </div>
  );
};

export default Banner;
