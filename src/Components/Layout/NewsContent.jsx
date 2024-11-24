import React from "react";
import LeftSideBtn from "../Pages/LeftSideBtn";
import { Outlet } from "react-router-dom";
import RightSideMenu from "../Pages/RightSideMenu";

export default function NewsContent() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-12 gap-4">
        <aside className="col-span-3">
          <LeftSideBtn />
        </aside>
        <div className="col-span-6">
          <Outlet />
        </div>
        <aside className="col-span-3">
          <RightSideMenu />
        </aside>
      </div>
    </div>
  );
}
