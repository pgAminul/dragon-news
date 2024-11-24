import React from "react";
import Header from "./Header";
import Marque from "../Pages/Marque";
import Navbar from "./Navbar";
import NewsContent from "./NewsContent";
export default function Home() {
  return (
    <div className=" w-11/12 mx-auto">
      <Header />
      <section className="font-poppins">
        <Marque />
        <Navbar />
      </section>
      {/* this is main content/news section */}
      <NewsContent />
      <section></section>
    </div>
  );
}
