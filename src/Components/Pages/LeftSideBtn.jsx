import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
export default function LeftSideBtn() {
  //1st way
  const [category, setCategory] = useState([]);
  // 2nd way
  //   const [category, setCategory] = useState(null);
  useEffect(() => {
    const buttonFetch = async () => {
      // 1st way to get data direct access from useState by []
      const url = "https://openapi.programming-hero.com/api/news/categories";
      const res = await axios.get(url);
      setCategory(res.data.data.news_category);
      //2nd way to get data  useing useState value null
      //   const url = "https://openapi.programming-hero.com/api/news/categories";
      //   const res = await axios.get(url);
      //   const data = await res;
      //   setCategory(data.data.data.news_category);
    };

    buttonFetch();
  }, []);

  return (
    <div className=" min-h-full bg-base-100 p-3 shadow-lg ">
      {" "}
      {category?.map((categoryBtn) => {
        const { category_id, category_name } = categoryBtn;
        return (
          <div
            id="categoryBtn"
            className="flex felx-col gap-x-5"
            key={category_id}
          >
            <NavLink
              to={`/category/${category_id}`}
              className="btn  w-full my-1"
            >
              {category_name}{" "}
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}
