import { useContext } from "react";
import Navbar from "./Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthProvider } from "../Provider/AuthContext";
export default function Login() {
  const { loginUser, SetUser } = useContext(AuthProvider);
  const location = useLocation();
  console.log(location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const password = form.get("password");
    const email = form.get("email");
    loginUser(email, password)
      .then((res) => {
        const user = res.user;
        SetUser(user);
        // console.log(user)
        navigate(location?.state ? location.state : "/");
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <Navbar />
      <h2></h2>
      <div className="card bg-base-100 w-full max-w-md shadow-2xl mx-auto mt-10 ">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mb-5">
          Don't have an account?{" "}
          <NavLink to={"/register"} className={`text-red-600`}>
            Register Now
          </NavLink>
        </p>
      </div>
    </div>
  );
}
