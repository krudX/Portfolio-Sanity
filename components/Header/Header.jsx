"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button/Button";
import styles from "./style.module.scss";
import Nav from "./Nav/Nav";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../app/public/logo-main.svg";
import useScreenSize from "@/lib/hooks/useScreenSize";

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
        <Link href={"/"} className="h-11 aspect-square grid place-content-center rounded-xl bg-neutral-100" data-hover-text="Home">
          <Image src={Logo} alt="Prathamesh Bankar" width={24} height={30} />
        </Link>
      </div>
      <motion.div
        className={`bg-neutral-100 ${styles.menu}`}
        custom={isDesktop}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>
          {isActive && (
            <Nav
              toggleMenu={() => {
                setIsActive(!isActive);
              }}
            />
          )}
        </AnimatePresence>
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
