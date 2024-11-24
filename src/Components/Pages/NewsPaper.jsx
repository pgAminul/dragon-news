import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { FaShareAlt } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

export default function NewsPaper() {
  const loader = useLoaderData();
  const data = loader.data;

  return (
    <div>
      <h2>Data Found: {data.length}</h2>
      <div className="card">
        {data.map((d) => {
          const { thumbnail_url, _id, details, title, total_view, author } = d;
          const { img, name, published_date } = author;

          return (
            <div key={_id} className="card bg-base-100 shadow-xl mb-5">
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
                  className="rounded-xl w-full h-[300px] object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p>
                  {details.slice(0, 100)}...
                  <NavLink
                    to={`/details/${_id}`}
                    className="font-bold text-blue-600 ml-2"
                  >
                    Read More
                  </NavLink>
                </p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
