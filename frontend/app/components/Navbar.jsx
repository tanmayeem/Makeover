"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  
  return (
    <div className="navbar bg-base-100 bg-pink-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content font-weight-400 mt-3 z-[1] p-2 shadow bg-base-100 bg-pink-400 rounded-box w-52  text-lg"
              >
                <li>
                  <a>Portfolio</a>
                </li>
                <li>
                  <a href="">About Me</a>
                </li>

                <li>
                <a href="/Contact_page">Contact</a>
                </li>
              </ul>
      
        </div>

        <a className="btn btn-ghost text-xl">
          <Image
            src="/logo.svg"
            height={50}
            width={90}
            unoptimized
            alt="logo"
          />
        </a>
      </div>

            {/* this is for Computer and larger display */}

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1  text-lg gap-3">
          <li className=" ">
            <a>Portfolio</a>
          </li>
          <li>
            <a href="/Aboutme.jsx" >About Me</a>
          </li>
          <li>
            <a href="/Contact_page">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end px-5">
        <a
          className="btn text-[15px] bg-pink-300 text-black text-[15px]  hover:bg-pink-700"
          href="https://www.instagram.com/makeoversbytanmayi/"
          target="blank"
        >
          <Image src="/image.png" height={20} width={20} alt="ge" />
          Instagram
        </a>
      </div>
    </div>
  );
}
