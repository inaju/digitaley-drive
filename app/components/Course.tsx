import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";
import { FollowingPointerDemo } from "./card/CustomCard";
import "swiper/css";
import { courses } from "../data";
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
    breakpoints: {
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
  const categories = ["All", "Data", "Python", "Business"];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([
    "All",
  ]);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  console.log(filteredCourses);
  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    if (selectedCategories[0] == "All" || updatedCategories.length === 0) {
      setFilteredCourses(courses); // Show all courses if "All" is selected or no categories are chosen
    } else {
      setFilteredCourses(
        courses.filter((course) => updatedCategories.includes(course.category))
      ); // Filter based on selected categories
    }
  };

  return (
    <section id="popular" className="container">
      <div className="container">
        <div className="flex flex-col gap-16 lg:flex-row justify-between">
          <div className="w-[100%] lg:w-2/12 h-fit border border-greenPrimary rounded-xl p-[2rem] gap-6 shadow-md flex flex-col">
            <h1 className="text-3xl text-greenPrimary">Category</h1>

            {categories.map((item, index) => (
              <label
                key={index}
                className="flex items-center gap-4 cursor-pointer"
              >
                <input
                  type="checkbox"
                  onChange={() => handleCategoryChange(item)}
                  checked={selectedCategories.includes(item)}
                  className="hidden"
                />
                <span
                  className={`custom-checkbox ${
                    selectedCategories.includes(item) ? "checked" : ""
                  }`}
                ></span>
                <p className="font-[500] text-[18px]">{item}</p>
              </label>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] lg:w-9/12">
            {filteredCourses.map((course, i) => {
              return <FollowingPointerDemo key={i} index={i} course={course} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
