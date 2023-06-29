import React from "react";
import Image from "next/image";

function Avatar({}) {
  return (
    <Image
      src={"/images/placeholder.jpg"}
      className="rounded-full "
      width={30}
      height={30}
      alt={"User image"}
    />
  );
}

export default Avatar;
