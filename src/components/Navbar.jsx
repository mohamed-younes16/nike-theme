import * as allimages from "../assets/images/index.js";
import * as allicons from "../assets/icons/index.js";
import { useRef } from "react";
export default function Navbar() {
  const ulref = useRef();
  return (
    <>
      <nav className="absolute top-0 w-full z-50">
        <div className="container mx-auto p-4  padding-x">
          <div className="flex justify-between">
            <div className="logo mr-5">
              <img src={allimages.headerLogo} alt="nike logo" />
            </div>
            <ul
              ref={ulref}
              className="flex flex-col md:flex-row max-md:fixed ul-nav right-0 
                text-2xl max-lg:text-xl whitespace-nowrap grow gap-16 font-montserrat justify-center text-gray-600 "
            >
              <li>
                <a
                  href="#home"
                  onClick={() => ulref.current.classList.remove("shown-ul")}
                  className="hover:text-black transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => ulref.current.classList.remove("shown-ul")}
                  className="hover:text-black transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={() => ulref.current.classList.remove("shown-ul")}
                  className="hover:text-black transition duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => ulref.current.classList.remove("shown-ul")}
                  className="hover:text-black transition duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="burger fixed  right-6 md:hidden z-50">
              <img
                src={allicons.hamburger}
                alt="humburger logo"
                className="cursor-pointer hover:rotate-180  transition"
                onClick={() => ulref.current.classList.toggle("shown-ul")}
                height={50}
                width={50}
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
