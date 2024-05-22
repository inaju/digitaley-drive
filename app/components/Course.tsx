import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { register } from "swiper/element";
// import { courses } from "../data";
import Course from "../card/Course";
import SliderNavigation from "./SliderNavigation";
import { centerVariants } from "../constant/motion";
import { FollowingPointerDemo } from "./card/CustomCard";
import "swiper/css";
import { courses } from "../data";
register();

// const courses = [
//     {
//         id: 2,
//         title: "Data Analytics",
//         description: 'This comprehensive Data Analyst Track Fellowship is designed to equip   you with the skills and knowledge to thrive in the field of data analytics, regardless of your experience level.Master the nuances of data analysis, progressing from beginner to advanced through a blend of live, interactive sessions and hands- on project - based learning.  <br />     diverse industries like healthcare, e-commerce, digital marketing, retail,   aviation, and fintech. This program will empower you to demonstrate  your expertise to potential employers and hit the ground running in your data analyst career.',
//         category: "Technology",
//         difficulty: "Intermediate",
//         thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         instructor: {
//             name: "Michael Chen",
//             pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         },
//         tools: [
//             {
//                 tool: 'Excel',
//                 color: 'bg-green-200 text-green-700'
//             },
//             {
//                 tool: 'SQL',
//                 color: 'bg-slate-200 text-slate-700'
//             },
//             {
//                 tool: 'Power BI',
//                 color: 'bg-yellow-200 text-yellow-700'
//             },
//             {
//                 tool: 'Github',
//                 color: 'bg-red-200 text-red-700'
//             },
//             {
//                 tool: 'Job/Freelance Preparation',
//                 color: 'bg-blue-200 text-blue-700'
//             },
//         ],
//         duration: '3',
//         amountWithInternship: '70,000|$70 ',
//         amountWithoutInternship: '50,000|$50',
//     },
//     {
//         id: 3,
//         title: "Data Science",
//         category: "Marketing",
//         difficulty: "Advanced",
//         thumbnail: 'https://plus.unsplash.com/premium_photo-1661778915982-d104c9a41fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         instructor: {
//             name: "Emily Davis",
//             pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         },
//         rating: 4.8,
//         description: 'Become a Data Scientist with our 4 months intensive training covering 30+ topics and hands on practical project.',
//         // category: "Technology",
//         tools: [
//             {
//                 tool: 'Machine Learning',
//                 color: 'bg-red-200 text-red-700'
//             },
//             {
//                 tool: 'Mathematics',
//                 color: 'bg-yellow-200 text-yellow-700'
//             },
//             {
//                 tool: 'Python',
//                 color: 'bg-slate-200 text-slate-700'
//             },
//             {
//                 tool: 'Statistics',
//                 color: 'bg-blue-200 text-blue-700'
//             },
//             {
//                 tool: 'Sklearn',
//                 color: 'bg-purple-200 text-purple-700'
//             },
//             {
//                 tool: 'Github',
//                 color: 'bg-black text-white'
//             },
//         ],
//         duration: '4'
//     },
//     {
//         id: 4,
//         title: "Business Intelligence",
//         description: 'This program is designed to equip you with the right skills as a Business Intelligence Analyst and prepare you for jobs. Join our    3 months intensive trainning covering over 40+ topics, 5 projects.',
//         category: "Technology",
//         difficulty: "Intermediate",
//         thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         instructor: {
//             name: "Michael Chen",
//             pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         },
//         rating: 4.9,
//         tools: [
//             {
//                 tool: 'Power BI',
//                 color: 'bg-yellow-200 text-yellow-700'
//             },
//             {
//                 tool: 'SQL',
//                 color: 'bg-slate-200 text-slate-700'
//             },
//             {
//                 tool: 'Problem Solving Techniques',
//                 color: 'bg-blue-200 text-blue-700'
//             },
//             {
//                 tool: 'Excel',
//                 color: 'bg-green-200 text-green-700'
//             },
//             {
//                 tool: 'Presentation, communication & Storytelling',
//                 color: 'bg-black text-white'
//             },
//         ],
//         duration: '3'
//     },
//     {
//         id: 5,
//         title: "Data Analytics with Python",
//         category: "Marketing",
//         difficulty: "Advanced",
//         thumbnail: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         instructor: {
//             name: "Emily Davis",
//             pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         },
//         rating: 4.8,
//         description: 'Become very proficient with Python in 3 months (12 weeks) with our detailed Python module taking you from introductory topic to machine learning for data analysis.',
//         // category: "Technology",
//         tools: [
//             {
//                 tool: 'Python',
//                 color: 'bg-yellow-200 text-yellow-700'
//             },
//             {
//                 tool: 'Google colab',
//                 color: 'bg-green-200 text-green-700'
//             }
//         ],
//         duration: '3'
//     },

//     {
//         id: 6,
//         title: "Business Analysis",
//         category: "Marketing",
//         difficulty: "Advanced",
//         thumbnail: 'https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.webp?b=1&s=170667a&w=0&k=20&c=8HOUiG9_M3Nm2TKS-EiGI8XdZctk7502R7s8NbCTm88=',
//         instructor: {
//             name: "Emily Davis",
//             pic: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg',
//         },
//         rating: 4.8,
//         description: 'Are you an entry level business analyst with (0-2 years experience) (2-4 years experience) or (5 years experience) and you are looking to take the CBAP or other exams, contact us.',
//         duration: '4'
//     },
// ]
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
        'All',
        'Data',
        'Python',
        'Business',

    ]

    const [selectedCategories, setSelectedCategories] = useState<string[]>(['All']);
    const [filteredCourses, setFilteredCourses] = useState(courses);
  console.log(filteredCourses)
  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(cat => cat !== category)
      : [...selectedCategories, category];
  
    setSelectedCategories(updatedCategories);
  
    if (selectedCategories[0] == 'All' || updatedCategories.length === 0) {
      setFilteredCourses(courses); // Show all courses if "All" is selected or no categories are chosen
    } else {
      setFilteredCourses(courses.filter(course => updatedCategories.includes(course.category))); // Filter based on selected categories
    }
  };
    // const handleCategoryChange = (category: string) => {
        
    //   const updatedCategories = selectedCategories.includes(category)
    //     ? selectedCategories.filter(cat => cat !== category)
    //     : [...selectedCategories, category];
      
    //   setSelectedCategories(updatedCategories);
      
    //   if (updatedCategories.length === 0) {
    //     setFilteredCourses(courses);
    //   } else {
    //     setFilteredCourses(courses.filter(course => updatedCategories.includes(course.category)));
    //   }
    // };

    return (
        <section id="popular" className="container">
            <div className="container">
                <div className="flex flex-col gap-16 lg:flex-row justify-between">
                    <div className="w-[100%] lg:w-2/12 h-fit border border-greenPrimary rounded-xl p-[2rem] gap-6 shadow-md flex flex-col">
                        <h1 className="text-3xl space text-greenPrimary">Category</h1>
    
{categories.map((item, index) => (
          <label key={index} className="flex items-center gap-4 cursor-pointer">
            <input 
              type="checkbox" 
              onChange={() => handleCategoryChange(item)} 
              checked={selectedCategories.includes(item)}
              className="hidden"
            />
            <span className={`custom-checkbox ${selectedCategories.includes(item) ? 'checked' : ''}`}></span>
            <p className="font-[500] text-[18px]">{item}</p>
          </label>
        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[100%] lg:w-9/12">
                        {filteredCourses.map((course) => {
                            return (
                                <FollowingPointerDemo course={course} />
                            );

                        })}
                    </div>

                    {/* <motion.div
                        variants={centerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ margin: "0px 0px -200px 0px", once: true }}
                        className="flex flex-col gap-y-4"
                    >
                        <swiper-container ref={sliderRef}>

                            {courses.map((course) => {
                                    return (
                                        <swiper-slide key={course.id}>
                                            <FollowingPointerDemo course={course} />
                                        </swiper-slide>
                                    );
                                
                            })}
                        </swiper-container>
                        <SliderNavigation ref={sliderRef} length={courses.length}/>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;





























// 'use client'

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { register } from "swiper/element";
// // import { courses } from "../data";
// import Course from "../card/Course";
// import SliderNavigation from "./SliderNavigation";
// import { centerVariants } from "../constant/motion";
// import { FollowingPointerDemo } from "./card/CustomCard";
// import "swiper/css";

// register();
// const tracks = [
//     {
//       category: "Data",
//       name: "Data Analytics Track",
//       description: "This comprehensive Data Analyst Track Fellowship is designed to equip you with the skills and knowledge to thrive in the field of data analytics, regardless of your experience level. Master the nuances of data analysis, progressing from beginner to advanced through a blend of live, interactive sessions and hands-on project-based learning. Gain practical experience by tackling 5 real-world portfolio projects spanning diverse industries like healthcare, e-commerce, digital marketing, retail, aviation, and fintech. This program will empower you to demonstrate your expertise to potential employers and hit the ground running in your data analyst career.",
//       icons: ["Excel", "SQL", "PowerBI", "Github"],
//       programs: [
//         {
//           name: "Data Analytics Track without internship",
//           price: "50,000|$50",
//           notes: ["Excel", "PowerBI", "Github", "Bi weekly Mentorship", "SQL", "Hackathon Development"],
//         },
//         {
//           name: "Data Analytics Track with internship",
//           price: "70,000|$70",
//           notes: ["Excel", "PowerBI", "Github", "Bi weekly Mentorship", "SQL", "Hackathon Development", "3 months Internship"],
//         },
//       ],
//       actions: ["Enroll", "Installment", "See Brochure"],
//     },
//     {
//       category: "Data",
//       name: "Data Science Track",
//       description: "This comprehensive Data Science Track equips you with the skill and knowledge to conquer the ever-evolving field of data science, no matter your prior experience. Unravel the complexities of data science, progressing from beginner to advanced through a blend of engaging live sessions and hands-on project-based learning. Sharpen your real-world skills by tackling impactful portfolio projects. You'll build predictive models that solve real business problems and showcase your expertise at community graduation hackathons. This program empowers you to impress potential employers with your proficiency and launch your data science career with confidence.",
//       icons: ["Vscode", "SQL", "Python", "Github", "Sklearn", "Mathematics & Statistics"],
//       programs: [
//         {
//           name: "Data Science without internship",
//           price: "100,000|$100",
//           notes: ["Sklearn", "Python", "Github", "Statistics & Mathematics", "SQL", "Hackathon Development"],
//         },
//         {
//           name: "Data Science with internship",
//           price: "150,000|$150",
//           notes: ["Sklearn", "Python", "Github", "Statistics & Mathematics", "SQL", "Hackathon Development", "3 months Internship"],
//         },
//       ],
//       actions: ["Enroll", "Installment", "See Brochure"],
//     },
//     {
//       category: "Programming",
//       name: "Python Programming Track",
//       description: "Master Python and Build Powerful Solutions with the Python Track! This comprehensive Python Track equips you with the skill and knowledge to build scalable python codes and pipelines, regardless of your experience level. Unravel the complexities of Python programming, progressing from beginner to advanced through a blend of Interactive live sessions and hands-on project-based learning. Sharpen your real-world skills by tackling 3 impactful portfolio projects that solve real business challenges and showcase your expertise at community graduation hackathons. This program launches your python capabilities and expertise and empowers you to impress potential employers.",
//       icons: ["Python", "Google Colab", "Github", "Jupyter network"],
//       programs: [
//         {
//           name: "Python Programming",
//           price: "30,000|$30",
//           notes: ["Python", "Google Colab", "Github", "Hackathon Development"],
//         },
//       ],
//       actions: ["Enroll", "Installment", "See Brochure"],
//     },
//     {
//       category: "Data",
//       name: "Business Intelligence/PowerBI Developer",
//       description: "This comprehensive Business Intelligence/PowerBI developer program equips you with the expertise to drive business growth by utilizing powerful business intelligence tools. From Data Integration to Data CPT, to Data Modelling, to Advanced DAX computation and calculations that appraise business KPIs, to powerful insights and stories, to Deployment and maintenance, etc. Regardless of your experience level, master the nuances of business intelligence, progressing from beginner to advanced through a blend of live, interactive sessions and hands-on project-based learning. Gain practical experience by tackling 5 real-world portfolio projects spanning diverse industries like healthcare, e-commerce, retail, supply chain, and fintech. This program will empower you to demonstrate your expertise to potential employers and launch your career with confidence.",
//       icons: ["PowerBI Development", "SQL"],
//       programs: [
//         {
//           name: "Business Intelligence/PowerBI Developer without internship",
//           price: "100,000|$100",
//           notes: ["PowerBI", "Problem Solving Technique", "Bi weekly Mentorship", "SQL", "Presentation, Communication and Storytelling to business stakeholders"],
//         },
//         {
//           name: "Business Intelligence/PowerBI Developer with internship",
//           price: "130,000|$130",
//           notes: ["PowerBI", "Problem Solving Technique", "Bi weekly Mentorship", "SQL", "Presentation, Communication and Storytelling to business stakeholders", "3 months Internship"],
//         },
//       ],
//       actions: ["Enroll", "Installment", "See Brochure"],
//     },
//     {
//       category: "Data",
//       name: "Data Engineering Track",
//       description: "This program equips you with the in-demand skills to engineer the future of data in our ever-evolving data landscape, regardless of your experience level. Master the art of data management, from building ETL pipelines and data systems to designing efficient data organization. Progress from beginner to advanced through a blend of interactive live sessions and hands-on project-based learning. Sharpen your real-world skills by tackling impactful portfolio projects. These projects will solidify your knowledge and empower you to impress potential employers with your data engineering prowess, launching your career with confidence.",
//       icons: ["Snowflake", "BigQuery", "Red shift", "dbt", "SQL"],
//       programs: [
//         {
//           name: "Data Engineering Track without internship",
//           price: "100,000|$100",
//           notes: ["Snowflake", "BigQuery", "Red shift", "dbt", "SQL", "Bi-weekly mentorship"],
//         },
//         {
//           name: "Data Engineering Track with internship",
//           price: "150,000|$150",
//           notes: ["Snowflake", "BigQuery", "Red shift", "dbt", "SQL", "Bi-weekly mentorship", "3 months Internship"],
//         },
//       ],
//       actions: ["Enroll", "Installment", "See Brochure"],
//     },
//     {
//       category: "Business",
//       name: "Business Analysis",
//       description: "Reviewed by industry experts, this bootcamp is designed for both aspiring beginners and experienced professionals seeking a smooth transition into the high-demand field of Business Analysis. Our 100% practical curriculum, developed in collaboration with industry experts, equips you with the in-demand skills and real-world experience to land your dream job quickly. This intensive Bootcamp equips both beginners and seasoned professionals with the in-demand skills to bridge the gap between business and IT. Master Agile and Scrum methodologies to plan, execute, and complete projects effectively. Gain a deep understanding of Requirements Engineering Lifecycles and the critical role of System Analysis. You'll become a champion of business transformation, learning to discover, design, and implement valuable process improvements. Hone your skills through real-world Capstone Projects and walk away with double the power: the Digitaley Drive Business Analysis Certificate and the Scrum Alliance Certified ScrumMaster (CSM) Certification. This Bootcamp is your springboard to a rewarding career in Business Analysis.",
//       curriculum: [
//         {
//           week: 1,
//           title: "Foundations of Business Analysis",
//           days: [
//             {
//               day: 1,
//               topics: ["Introduction to Business Analysis", "Role of a Business Analyst", "Identifying stakeholders", "Business Analysis vs Data Analysis"],
//             },
//             {
//               day: 2,
//               topics: ["Understanding Data & Problem solving", "What is data?", "Different types of data", "Problem solving in data", "CRISP-DM", "McKinney"],
//             },
//             {
//               day: 3,
//               topics: ["Introduction to Microsoft Excel", "Understanding excel interface", "Data Analytics in Excel", "Excel Functions", "Pivot table", "Pivot charts"],
//             },
//             {
//               day: 4,
//               topics: ["Hands-on Practice with Excel", "Data Visualization", "Dashboarding with Excel"],
//             },
//           ],
//         },
//         {
//           week: 2,
//           title: "Data Analysis Tools",
//           days: [
//             {
//               day: 5,
//               topics: ["Introduction to Power BI", "Understanding power bi", "ETL", "Data Analysis & Visualization", "Transformation and cleaning"],
//             },
//             {
//               day: 6,
//               topics: ["Data Analysis with Power BI", "DAX in Power BI", "Dashboarding"],
//             },
//             {
//               day: 7,
//               topics: ["Hands-on Practice with Power BI", "Dashboarding exercises", "Presentation"],
//             },
//           ],
//         },
//         {
//           week: 3,
//           title: "Database Fundamentals",
//           days: [
//             {
//               day: 8,
//               topics: ["Introduction to SQL", "Basics of SQL syntax", "Data Manipulation Language"],
//             },
//             {
//               day: 9,
//               topics: ["Advanced SQL", "Data Query Language", "Data Sorting and Filtering"],
//             },
//             {
//               day: 10,
//               topics: ["SQL Functions", "Aggregation Functions"],
//             },
//           ],
//         },
//         {
//           week: 4,
//           title: "Business Analysis Planning",
//           days: [
//             {
//               day: 11,
//               topics: ["Planning and Monitoring", "BA Planning and Monitoring", "Stakeholder Analysis"],
//             },
//             {
//               day: 12,
//               topics: ["Business Analysis Plan", "Approach and Tasks", "Information Management"],
//             },
//             {
//               day: 13,
//               topics: ["Performance Improvements", "Identifying Improvements", "Strategy Analysis"],
//             },
//           ],
//         },
//         {
//           week: 5,
//           title: "",
//           days: [
//             {
//               day: 14,
//               topics: ["Documentation and Reporting", "Importance of documentation in BA", "Types of BA documentation (business requirements document, functional specifications)", "Creating clear and concise reports for stakeholders"],
//             },
//             {
//               day: 15,
//               topics: ["Requirements Elicitation", "Techniques for gathering requirements (interviews, surveys, workshops)", "Documenting requirements (use cases, user stories)", "Prioritizing requirements"],
//             },
//             {
//               day: 16,
//               topics: ["Business Analysis in Agile Environments", "Agile methodology overview", "Role of business analyst in agile teams", "Agile requirements gathering and management"],
//             },
//             {
//               day: 17,
//               topics: ["Capstone project"],
//             },
//           ],
//         },
//       ],
//       price: "$390",
//     },
//   ];
  

//   type TrackCardProps = {
//     track: Track;
//   };
  
//   const TrackCard: React.FC<TrackCardProps> = ({ track }) => (
//     <div className="track-card">
//       <h2>{track.name}</h2>
//       <p>{track.description}</p>
//       <div className="icons">
//         {track.icons && track.icons.map((icon, index) => (
//           <span key={index} className="icon">{icon}</span>
//         ))}
//       </div>
//       {track.programs && track.programs.map((program, index) => (
//         <div key={index} className="program">
//           <h3>{program.name}</h3>
//           <p>{program.price}</p>
//           <ul>
//             {program.notes.map((note, noteIndex) => (
//               <li key={noteIndex}>{note}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//       {track.actions && track.actions.map((action, index) => (
//         <button key={index}>{action}</button>
//       ))}
//       {track.curriculum && track.curriculum.map((week, weekIndex) => (
//         <div key={weekIndex} className="week">
//           <h3>{`Week ${week.week}: ${week.title}`}</h3>
//           {week.days.map((day, dayIndex) => (
//             <div key={dayIndex} className="day">
//               <h4>{`Day ${day.day}:`}</h4>
//               <ul>
//                 {day.topics.map((topic, topicIndex) => (
//                   <li key={topicIndex}>{topic}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );




//   const PopularCourses: React.FC = () => {
//     const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
//     const categories = ['All', 'Data', 'Programming', 'Business'];
  
//     const filteredTracks = selectedCategory === 'All'
//       ? tracks
//       : tracks.filter(track => track.category === selectedCategory);
  
//     return (
//       <div className="app">
//         <div className="filter">
//           {categories.map(category => (
//             <button key={category} onClick={() => setSelectedCategory(category)}>
//               {category}
//             </button>
//           ))}
//         </div>
//         {filteredTracks.map((track, index) => (
//           <TrackCard key={index} track={track} />
//         ))}
//       </div>
//     );
//   };
  
//   export default PopularCourses;

