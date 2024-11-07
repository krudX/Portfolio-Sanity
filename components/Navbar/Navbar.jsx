"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import Logo from "../../app/public/logo-main.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { links } from "../Header/Nav/data";

import { AnimatePresence, motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Navbar = () => {
  // useGSAP(() => {
  //   gsap.to("#primary-header", {
  //     duration: 0.5,
  //     top: "44px",
  //     ease: "power1.out",
  //     delay: 0.25,
  //   });
  // }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.header
        initial={{ opacity: 0, y: -32 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -32 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        id="primary-header"
        className="bg-none fixed left-1/2 -translate-x-1/2"
      >
        <div className="w-max flex items-center gap-2">
          <div className="logo-wrap">
            <Link
              href={"/"}
              className="h-11 aspect-square grid place-content-center rounded-xl bg-overlay-light-neutral hover:bg-neutral-100 backdrop-blur-medium transition-colors duration-350"
              data-hide-cursor
            >
              <Image src={Logo} alt="Prathamesh Bankar" width={24} height={30} />
            </Link>
          </div>
          <div className="menu-wrapper">
            <ul className="primary-menu p-1 flex items-center gap-1 rounded-xl bg-overlay-light-neutral backdrop-blur-medium">
              {links.map((item) => {
                return (
                  <li className="menu-el" key={item.path}>
                    <Link href={item.path} className={`menu-link inline-block hover:bg-overlay-light-neutral ${styles.menuLink}`} data-hide-cursor>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.header>
    </AnimatePresence>
  );
};

export default Navbar;
