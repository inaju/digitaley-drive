"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, forwardRef } from "react";
import logo from "../../public/digitaley-logo.png";
const navLinks = [
    { title: "Home", href: "/" },
    { title: "Not Sure", href: "/" },
    { title: "Courses", href: "/" },
    { title: "Why digitaley drive", href: "/" },
];

const MobileNavbar = ({ toggleMenu, open }: { open: any, toggleMenu: any }) => {
    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };
    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    return (
        <header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed lato left-0 top-0 w-full h-screen origin-top bg-lightPrimary text-black p-10"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex justify-between">
                                <Link
                                    className="flex hover:no-underline  w-[15rem] items-center gap-3 font-semibold text-grey-800"
                                    href="/"
                                >
                                    <Image src={logo} alt="logo" height={40} width={40} />
                                    <p className="text-xl text-gray-700">Digitaley Drive</p>
                                </Link>
                                <p
                                    className="cursor-pointer text-md text-black"
                                    onClick={toggleMenu}
                                >
                                    Close
                                </p>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col h-full justify-center font-lora items- gap-4 "
                            >
                                {navLinks.map((link, index) => {
                                    return (
                                        <div className="overflow-hidden">
                                            <MobileNavLink
                                                key={index}
                                                title={link.title}
                                                href={link.href}
                                            />
                                        </div>
                                    );
                                })}
                                <motion.div
                                    variants={mobileLinkVars}
                                    className=""
                                >
                                    <h1 className="text-3xl uppercase text-black">Company</h1>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default MobileNavbar;
const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};

// const MobileDropDown = () => {

// }
const MobileNavLink = ({ title, href }: { title: string, href: string }) => {
    return (
        <motion.div
            variants={mobileLinkVars}
            className=""
        >
            <Link href={href} className="text-3xl uppercase text-black">{title}</Link>
        </motion.div>
    );
};