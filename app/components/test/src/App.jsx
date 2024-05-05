import { Header, Statistics, CTA, Footer } from "./components";
import { About, Blogs, Courses, Hero, Instructors, PopularCourses } from "./sections";
// import './index.css'
export default function TestApp() {
    return (
        <>
            <Header />
            <Hero />
            <Statistics />
            <About />
            <PopularCourses />
            <Courses />
            <Instructors />
            <Blogs />
            <CTA />
            <Footer />
        </>
    );
}
