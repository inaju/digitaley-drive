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

export default function Home() {
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

      <Footer />
    </main>
  );
}
