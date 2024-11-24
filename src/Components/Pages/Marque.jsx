import React from "react";
import Marquee from "react-fast-marquee";
export default function Marque() {
  return (
    <div className="flex justify-center items-center p-2  bg-base-200 my-4">
      <button className="btn btn-error">Latest</button>
      <Marquee>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          facilis. facilis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          facilis. facilis.
        </p>
      </Marquee>
    </div>
  );
}
