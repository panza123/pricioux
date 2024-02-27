import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

export default function Footer() {
  return (
    <footer className="w-full h-[50px] bg-slate-50 mt-4 relative">
      <ul className="w-full h-full flex justify-center items-center cursor-pointer gap-3">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61556659058064&mibextid=ZbWKwL"
            target="_blank"
          >
            <FaFacebook size={30} className="text-blue-700" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/pric.ioux?igsh=dTJjaTR6dzk0Ym8w"
            target="_blank"
          >
            <FaInstagram size={30} className="text-red-700" />
          </a>
        </li>

        <li>
  <a href="https://wa.me/447404250009" target="_blank">
    <FaWhatsapp size={30} className="text-green-700" />
  </a>
</li>


        <li>
          <a href="mailto:ppricioux.com">
            <CgMail size={35} className="text-red-700" />
          </a>
        </li>
      </ul>
      <ul className="w-[50px] h-[50px] rounded-[100%] bg-white/50 absolute bottom-[50px] right-0 cursor-pointer">
        <li className="m-4">
          <a href="#home">
            <FaArrowUp size={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}
