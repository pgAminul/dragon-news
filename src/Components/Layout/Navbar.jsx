import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoMdLogIn } from "react-icons/io";
import { AuthProvider } from "../Provider/AuthContext";

export default function Navabr() {
  const { user, logOut } = useContext(AuthProvider);
  return (
    <div className="flex justify-between items-center pt-4">
      <div>{user ? user.email : ""}</div>
      <div className="flex gap-x-5 text-gray-600">
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/career"}>Career</Link>
      </div>
      <div className="flex items-center gap-x-3 justify-center ">
        <p className="text-4xl">
          {user ? (
            <img
              className="w-10 h-10 object-cover rounded-full "
              src={user?.photoURL}
              alt=""
            />
          ) : (
            <IoPersonCircleSharp />
          )}
        </p>
        <div
          onClick={logOut}
          className="flex cursor-pointer py-2 px-4 bg-black text-white"
        >
          {" "}
          {user ? (
            <>
              {" "}
              <Link to={"/"}>LogOut</Link>
              <p className="text-2xl">
                <IoMdLogIn />
              </p>
            </>
          ) : (
            <>
              {" "}
              <Link to={"/login"}>Login</Link>
              <p className="text-2xl">
                <IoMdLogIn />
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
