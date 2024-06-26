'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navbarVariants, mobileMenuVariants } from "../constants/motion";
import { useResizeX, useScrollY } from "../hooks";
import NavBar from "@/app/components/nav";
import { usePathname } from "next/navigation";
const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const resized = useResizeX(992);
    const scrolled = useScrollY(100);

    useEffect(() => {
        if (resized) setToggleMenu(false);
    }, [resized]);
    const pathname = usePathname()

    if(pathname == "/login") return;

    return (
        <motion.header
            layout
            variants={navbarVariants}
            initial={["default", { y: -100 }]}
            animate={[scrolled ? "active" : "default", "slide"]}
            transition={{ duration: 0.3 }}
            className="fixed flex items-center h-[70px] z-[1000] max-w-[100vw] w-[100vw] border-solid border-transparent"
        >
           <NavBar />
        </motion.header>
    );
};

export default Header;
