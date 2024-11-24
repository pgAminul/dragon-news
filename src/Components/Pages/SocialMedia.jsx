import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="mt-6">
      <h2 className="font-bold text-2xl mb-5">Find On Us</h2>
      <div className=" border p-2 cursor-pointer">
        <a
          className="flex gap-4 items-center"
          href="https://www.facebook.com/profile.php?id=100032484008187"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook /> <p>FaceBook</p>
        </a>
      </div>
      <div className=" border p-2 cursor-pointer">
        <a
          className="flex gap-4 items-center"
          href="https://x.com/aminul_islam_S"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter /> <p>Twitter</p>
        </a>
      </div>
      <div className=" border p-2 cursor-pointer">
        <a
          className="flex gap-4 items-center"
          href="https://www.instagram.com/aminul_islam_showrov/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram /> <p>Instagram</p>
        </a>
      </div>
    </div>
  );
}
