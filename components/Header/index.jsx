"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../app/public/logo-main.svg";
import { useMediaQuery } from "@/lib/useMediaQuery";
import useScreenSize from "@/lib/useScreenSize";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const screenSize = useScreenSize();

  let isDesktop = null;

  if (screenSize.width > 786) {
    isDesktop = true;
  } else {
    isDesktop = false;
  }

  const menu = {
    open: {
      width: isDesktop ? "380px" : "calc(100vw - 24px)",
      height: "450px",
      top: "-12px",
      right: "-12px",
      borderRadius: "24px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      width: "44px",
      height: "44px",
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div className={styles.header}>
      <div className="logo-wrap">
        <Link href={"/"} className="h-11 aspect-square grid place-content-center rounded-xl bg-overlay-light-neutral backdrop-blur-medium">
          <Image src={Logo} alt="Prathamesh Bankar" width={24} height={30} />
        </Link>
      </div>
      <motion.div
        className={`backdrop-blur-medium ${styles.menu} ${isActive ? "bg-neutral-100" : "bg-overlay-light-neutral "}`}
        custom={isDesktop}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        toggleMenu={() => {
          setIsActive(!isActive);
        }}
      />
    </div>
  );
}
