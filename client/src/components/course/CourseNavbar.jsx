import React from "react";
// Images
import DefaultProfileImage from "../../assets/images/default.png";
// Styles
import '../../styles/neo.css'

function CourseNavbar() {
  return (
    <section className="grid grid-rows-a1a max-w-[300px] p-4 rounded-xl bg-neo">
      {/* PROFILE IMAGE */}
      <section className="">
        <article className="text-center">
          <h2 className="text-lg">Worlds Smartest Player</h2>
          <div className="grid justify-center my-6">
            <img
              className="rounded-full w-52 h-52 bg-neo-alt"
              // src={DefaultProfileImage}
              alt="user profile avatar"
            />
          </div>
        </article>
      </section>
      {/* Course Navigation */}
      <section className="grid mt-6 px-2">
        <div className="grid gap-4 h-fit">
          <div className="bg-neo-alt grid items-center justify-center p-2">
            <button>CURRENT COURSE</button>
          </div>
          <div className="bg-neo-alt grid items-center justify-center p-2">
            <button>LATEST</button>
          </div>
          <div className="bg-neo-alt grid items-center justify-center p-2">
            <button>LEADERBOARD</button>
          </div>
          <div className="bg-neo-alt grid items-center justify-center p-2">
            <button>STATS</button>
          </div>
        </div>
      </section>
      {/* Adverts */}
      <section className="bg-neo grid h-full min-h-[160px]">
        <article className="grid items-center justify-center">ADVERT</article>
      </section>
    </section>
  );
}

export default CourseNavbar;
