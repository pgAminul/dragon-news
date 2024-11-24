import React, { useContext, useState } from "react";
import Navbar from "./Navbar";
import { NavLink, useLocation } from "react-router-dom";
import { AuthProvider } from "../Provider/AuthContext";

export default function Register() {
  const { createUser, SetUser, profileUpdata } = useContext(AuthProvider);
  const [trems, setTrems] = useState(false); // Trems initialized as false
  const [passwordError, setPasswordError] = useState("");
  const [nameError, setNameError] = useState("");
  const [photoError, setPhotoError] = useState("");
  const [emailError, setEmailError] = useState(null);
  const regularExpression =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{1,}$/;
  const urlRegex =
    /^(https?:\/\/)?([\w\-]+\.)+[a-z]{2,6}(\/[\w\-._~:/?#[\]@!$&'()*+,;=%]*)?$/i;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleRegisterFrom = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (!name.trim()) {
      setNameError("Please write your name");
      return;
    } else {
      setNameError("");
    }

    if (!urlRegex.test(photo)) {
      setPhotoError("Please provide a valid URL");
      return;
    } else {
      setPhotoError("");
    }
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
    //  || !regularExpression.test(password)
    if (password.length < 6) {
      setPasswordError("Password must be more than 6 characters");
      return;
    } else {
      setPasswordError("");
    }

    if (!trems) {
      setPasswordError("Please accept the terms and conditions");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
      .then((res) => {
        const result = res.user;
        SetUser(result);
        profileUpdata({ displayName: name, photoURL: photo });
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const tremsAndCondition = () => {
    setTrems(!trems);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto my-10">
        <form onSubmit={handleRegisterFrom} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              name="name"
            />
            <p className="text-red-600">{nameError}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo (URL)</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              name="photo"
            />
            <p className="text-red-600">{photoError}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              name="email"
            />
            <p className="text-red-600">{emailError}</p>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              name="password"
            />
            <p className="text-red-600">{passwordError}</p>
          </div>
          <div className="form-control">
            <label className="cursor-pointer flex gap-6 items-center">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                onChange={tremsAndCondition}
              />
              <span className="label-text">
                Accept Our Terms and Conditions
              </span>
            </label>
          </div>
          <p className="text-red-600">{trems}</p>
          <div className="form-control mt-6">
            <button className="btn btn-primary" type="submit">
              Register
            </button>
          </div>
        </form>
        <p className="text-center mb-5">
          Already have an account?{" "}
          <NavLink to="/login" className="text-red-600">
            Login Now
          </NavLink>
        </p>
      </div>
    </div>
  );
}
