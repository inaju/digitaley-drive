import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
type Props = {};

const reasons = [
  {
    title: "Learn Virtually",
    description:
      "Our 100% detailed virtual classes give you a transformational learning experience. Make the world your classroom and learn In your own space at a guided pace. ",
    link: "https://netflix.com",
  },
  {
    title: "Recorded session",
    description:
      "We also give you live time access to every recorded session of the training which will be made available after each class.",
    link: "https://stripe.com",
  },
  {
    title: "Instructors with real life experience",
    description:
      "We pride ourselves in our team of highly experienced facilitators that are patient, sophisticated and willing to walk you through every step of your learning. Each course will come with real life scenarios for practical illustration.",
    link: "https://netflix.com",
  },
  {
    title: "Mentorship",
    description:
      "During the programme, you have the opportunity to book BI-weekly session with a mentor, who will guide you through your learning and development outside of the classroom.",
    link: "https://google.com",
  },
  {
    title: "Community ",
    description:
      "Learning never stops with our community of highly driven talents, like- minded passionate learners, and experienced professionals. Where you have the opportunity to interact with facilitators and colleagues,ask questions, give suggestions and get real-time feedback.",
    link: "https://meta.com",
  },
  {
    title: "Projects and Hackathon",
    description:
      "At the end of each programme, you will have the opportunity to build sophisticated projects for your portfolio and participate in a hackathon organized by our learning institute. A Pre-hackathon will be held, of which the best students will be selected to present in the main hackathon event.      ",
    link: "https://amazon.com",
  },
];
const HowDigitaley = (props: Props) => {
  return (
    <div
      id="why-digitaley"
      className="bg-[#005DE80C] px-[1rem] lato w-[100vw] h-fit py-20"
    >
      <h1 className="text-3xl text-center">How learning  <span className="border-b-4 text-greenPrimary border-greenPrimary pb-1">works</span></h1>
      <div className="flex flex-col lg:flex-row items-center mt-16 justify-evenly">
        <img src="https://heelsandtech.com/wp-content/uploads/2023/07/Asset-1-1024x716.png" 
        className="w-[100%] lg:w-5/12" />

    
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12 w-[100%] mt-16 lg:mt-0 lg:w-6/12">
  {
    reasons.map((item) => <div className="text-center py-3 px-[1rem]" key={item.title}>
      <h1 className="text-greenPrimary text-3xl">{item.title}</h1>
      <p className="mt-1">{item.description}</p>
    </div>)
  }
</div>
      </div>
    </div>
  );
};


export default HowDigitaley;