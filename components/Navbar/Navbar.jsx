"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Logo from "../../app/public/logo-main.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const menuLinks = [
  {
    path: "/work",
    label: "Work",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/journal",
    label: "Journal",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

const socialLinks = [
  {
    href: "/",
    label: "Dribbble",
  },
  {
    href: "/",
    label: "Github",
  },
  {
    href: "/",
    label: "Linkedin",
  },
];

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#primary-header", {
      duration: 0.5,
      top: "44px",
      ease: "power1.out",
      delay: 0.25,
    });
  }, []);

  return (
    <header id="primary-header" className="bg-none fixed -top-12 left-1/2 -translate-x-1/2">
      <div className="w-max flex items-center gap-2">
        <div className="logo-wrap">
          <Link href={"/"} className="h-11 aspect-square grid place-content-center rounded-xl bg-overlay-light-neutral backdrop-blur-medium">
            <Image src={Logo} alt="Prathamesh Bankar" width={24} height={30} />
          </Link>
        </div>
        <div className="menu-wrapper">
          <ul className="primary-menu p-1 flex items-center gap-1 rounded-xl bg-overlay-light-neutral backdrop-blur-medium">
            {menuLinks.map((item) => {
              return (
                <li className="menu-el" key={item.path}>
                  <Link href={item.path} className={`menu-link inline-block hover:bg-overlay-light-neutral ${styles.menuLink}`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
