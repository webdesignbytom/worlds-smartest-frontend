import React from "react";
// Components
import Navbar from "../../components/nav/Navbar";
import CourseNavbar from '../../components/course/CourseNavbar';
// Styles
import '../../styles/neo.css'
import CourseDataPanel from '../../components/course/CourseDataPanel';

function CourseOverview() {
  return (
    <div className="grid bg-[#242528] font-poppins text-gray-100 grid-rows-reg min-h-screen w-full lg:max-h-screen">
      <Navbar />
      <section className="grid px-4 md:px-6 mb-8 w-full">
        <div className="grid lg:grid-cols-x3 gap-8">
          {/* Side nav */}
          <CourseNavbar />

          {/* MAIN */}
          <main className="grid rounded-xl bg-neo w-full p-2">
            <CourseDataPanel />
          </main>
        </div>
      </section>
    </div>
  );
}

export default CourseOverview;
