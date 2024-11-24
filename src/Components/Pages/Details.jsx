import React from "react";
import Header from "../Layout/Header";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import RightSideMenu from "./RightSideMenu";
export default function Details() {
  const data = useLoaderData();
  const details = data.data;
  const navigate = useNavigate();
  const handleBackToHomeButton = () => {
    navigate(-1);
  };
  return (
    <div>
      <Header />
      <div className="grid grid-cols-12  w-10/12 mx-auto">
        <div className="col-span-8">
          {" "}
          {details.map((detail) => {
            const { thumbnail_url, _id, details, title, total_view, author } =
              detail;
            const { img, name, published_date } = author;
            return (
              <div
                key={_id}
                className="card bg-base-100 shadow-xl mb-5 w-10/12 mx-auto mt-5"
              >
                <div className=" bg-base-300 mb-2 px-10 py-2 rounded-lg">
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex">
                      <div className="avatar">
                        <div className="w-12 rounded-full">
                          <img src={img} alt={name} />
                        </div>
                      </div>
                      <div className="ml-4">
                        <p className="font-semibold text-lg">{name}</p>
                        <p className="text-sm text-gray-500">
                          Published: {published_date}
                        </p>
                      </div>
                    </div>
                    <div>
                      <p>
                        <FaShareAlt />
                      </p>
                    </div>
                  </div>
                </div>
                <figure className=" px-10">
                  <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-xl w-full  object-cover h-[500px]"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold">{title}</h2>
                  <p>{details}</p>
                  <div className="divider"></div>
                  <div className="card-actions justify-between mt-4">
                    <p className="text-gray-600 flex items-center gap-2">
                      <FaEye />
                      <p>{total_view || "N/A"}</p>
                    </p>

                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                      <input
                        type="radio"
                        name="rating-4"
                        className="mask mask-star-2 bg-green-500"
                      />
                    </div>
                  </div>
                </div>
                <NavLink
                  onClick={handleBackToHomeButton}
                  className="btn w-96 btn-error text-white mx-auto my-4"
                >
                  Back To Home{" "}
                </NavLink>
              </div>
            );
          })}
        </div>
        <div className="col-span-4">
          <RightSideMenu />
        </div>
      </div>
    </div>
  );
}
