import React from "react";
// Components
import Navbar from "../../components/nav/Navbar";
// Styles
import "./neo.css";

function CourseOverview() {
  return (
    <div className="grid bg:white dark:bg-black dark:text-white grid-rows-reg h-screen">
      <Navbar />
      <section className="grid grid-flow-col bg-neo">
        {/* Side nav */}
        <section className="grid border-r-2 border-gray-700 border-solid max-w-[300px] p-4">
          {/* PROFILE IMAGE */}
          <section className="grid justify-center my-2">
            <article className="profile__neo w-52 h-52 grid rounded-full items-center justify-center overflow-hidden">
              IMAGE
            </article>
          </section>
          <section>b</section>
          <section>b</section>
        </section>
        {/* MAIN */}
        <main>main</main>
      </section>
    </div>
  );
}

export default CourseOverview;
