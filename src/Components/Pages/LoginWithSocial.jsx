import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 pb-3">Login With</h2>
      <div className="flex justify-center items-center border gap-4 mt-3 px-4 py-2 font-bold cursor-pointer">
        <FaGoogle />
        <p>Login in With Google</p>
      </div>
      <div className="flex justify-center items-center border gap-4 mt-3 px-4 py-2 font-bold cursor-pointer">
        <FaGithub />
        <p>Login in With Github</p>
      </div>
    </div>
  );
}
