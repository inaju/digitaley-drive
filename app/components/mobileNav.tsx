"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState, forwardRef } from "react";
import logo from "../../public/digitaley-logo.png";
import { usePathname } from "next/navigation";
// import RoundedButton from "./custom/RoundedButton/RoundedButton";
const navLinks = [
    { title: "Home", href: "/" },
    { title: "Career Launch", href: "/career-launch" },
    { title: "Courses", href: "/courses" },
    { title: "Why digitaley drive", href: "/why-digitaley" },
    { title: "About us", href: "/about-us" },
    { title: "Contact Us", href: "/contact-us" },

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

    const currentPath = usePathname()
    return (
        <header>

            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed lato left-0 top-0 w-full h-screen origin-top bg-lightPrimary text-black p-10 px-[1rem]"
                    >
                        <div className="flex h-full flex-col">
                            <div className="flex items-center justify-between">
                                <Link
                                onClick={toggleMenu}
                                    className="flex hover:no-underline  w-[15rem] items-center gap-3 font-semibold text-grey-800"
                                    href="/"
                                >
                                    <Image src={logo} alt="logo" height={40} width={40} className="w-10" />
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
                                        <div className="overflow-hidden" key={index}>
                                            <MobileNavLink
                                                key={index}
                                                title={link.title}
                                                href={link.href}
                                                path={currentPath}
                                                toggleMenu={toggleMenu}
                                            />
                                        </div>
                                    );
                                })}
                                <motion.div
                                    variants={mobileLinkVars}
                                    className="flex justify-between items-center gap-12 mt-12"
                                >
                                    <Link
                                        className="border w-[100%] border-greenPrimary px-8 py-3 rounded-md text-[16px] gap-1 hover:no-underline text-greenPrimary hover:text-greenPrimary"
                                        href="#"
                                        aria-current="page"
                                    >
                                        Hire talents

                                        {/* {
                                            currentPath == "/hire-talents" &&

                                            <div className="bg-greenPrimary  h-[2px] w-[100%]"></div>
                                        } */}
                                    </Link>

                                    <Link
                                        className="border text-center w-[100%] border-greenPrimary px-8 py-3 rounded-md text-[16px] gap-1 hover:no-underline text-white bg-greenPrimary hover:text-greenPrimary"
                                        href="/login"
                                        aria-current="page"
                                    >
                                        Login
                                    </Link>
                                    {/* <button>Hire Talents</button>
                                    <RoundedButton className="w-fit px-8 py-2">
                                        Login
                                    </RoundedButton> */}
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
const MobileNavLink = ({ title, href, path, toggleMenu }: { title: string, href: string, path: string, toggleMenu: any }) => {
    const currentPath = '/contact-us'
    return (
        <motion.div
            variants={mobileLinkVars}
            className="flex items-center gap-5"

        >
            {
                path == href && <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
            }
            
            <Link href={href} className="text-[16px] lato uppercase text-black hover:text-greenPrimary" onClick={toggleMenu}>{title}</Link>
        </motion.div>
    );
};