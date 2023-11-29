"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";
import Hero from "./components/hero";
import Team from "./components/team";
import Testimonials from "./components/testimonials";
import Stats from "./components/stats";
import Faq from "./components/faq";
import ImageTextTwoColumn from "./components/image-text-two-column";
import Footer from "./components/footer";
import FeedbackForm from "./components/feedback-form";
import WhyDigitaley from "./components/why-digitaley";
import ToolsToLearn from "./components/tools-to-learn";
import Courses from "./components/courses";
import NavBar from "./components/nav";
import Mission from "./components/mission";
import { SocialIcon } from "react-social-icons";

export default function Home() {
    const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 pt-8 md:p-10 gap-y-40">
      <Hero />
      <Stats />
      <ImageTextTwoColumn />
      {/* <Mission /> */}
      <WhyDigitaley />
      <ToolsToLearn />
      <Courses />
      <Testimonials />
      <Team />
      <Faq />
      <FeedbackForm />
      <div>
        <div
          className="icon-bar"
          onClick={() =>
            router.push(
              'https://wa.me/08231231412?text=Hey Ruby, I want to learn more about digitaley drive, I came from the website!'
            )
          }
        >
          <SocialIcon url="https://web.whatsapp.com/08231231412?text=Hey Ruby I want to learn more about digitaley drive, I came from the website!" />
        </div>
      </div>
      <Footer />
    </main>
  );
}
