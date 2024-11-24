import React from "react";
import Time from "../Pages/Time";
export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center pt-4">
      <h2 className="font-UnifrakturMaguntia text-6xl ">The Dragon News </h2>
      <p className="text-gray-500 pt-2">Journalism Without Fear or Favour</p>
      <Time />
    </div>
  );
}
