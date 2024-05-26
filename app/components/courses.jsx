import React from "react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { register } from "swiper/element";
import SliderNavigation from "./SliderNavigation";
import { centerVariants } from "../constant/motion";
import { FollowingPointerDemo } from "./card/CustomCard";
import "swiper/css";
import { courses } from "../data/index";
import Link from "next/link";
register();

const PopularCourses = () => {
    const sliderRef = useRef(null);
    const swiperParams = {
        spaceBetween: 16,
        grabCursor: true,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints:
        {

            0: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    };

    useEffect(() => {
        sliderRef.current && Object.assign(sliderRef.current, swiperParams);
    }, []);
    const categories = [
        'Data',
        'Python',
        'Business',

    ]

    return (
        <section id="popular" className="container">
            <div className="container">
                <div className="flex justify-between">
                  <motion.div
                        variants={centerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "0px 0px -200px 0px", once: true }}
                        className="flex flex-col gap-y-4 w-[100%]"
                    >
                        <swiper-container ref={sliderRef}>

                            {courses.map((course) => {
                                    return (
                                        <swiper-slide key={course.id}>
                                            <FollowingPointerDemo course={course} width="lg:max-w-[27.5rem]"/>
                                        </swiper-slide>
                                    );
                                
                            })}
                        </swiper-container>
                        <SliderNavigation ref={sliderRef} />
                    </motion.div> 
                </div>
            </div>
        </section>
    );
};








const Courses = (props) => {
    // const navigate = useNavi
  return (
   <div className="w-[100vw] ">
     <div
      id="courses"
      className="max-w-[90rem] lato px-4 py-8 sm:px-6 lg:px-8 lg:py-24 mx-auto"
    >
    
      <div className="cursor-pointer justify-end mb-4 flex items-center gap-4">
        <Link href="/courses" className="text-greenPrimary" >Browse All Courses</Link>
        <img src="/assets/svg/arrow-right-green.svg" alt="" className="w-6" />
      </div>
      <PopularCourses />
    </div>
   </div>
  );
};

export default Courses;