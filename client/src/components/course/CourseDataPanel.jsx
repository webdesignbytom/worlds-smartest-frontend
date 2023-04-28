import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../context/CourseContext";
import CourseDataOverview from "./CourseDataOverview";
import NewsfeedContainer from "../newsfeed/NewsfeedContainer";
import CourseUserOverview from "./CourseUserOverview";
import CourseOverviewLeaderboard from '../leaderboard/CourseOverviewLeaderboard';

function CourseDataPanel() {
  const { currentCourseData } = useContext(CourseContext);

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const todaysDate = new Date();
    console.log("todaysDate", todaysDate);
    // Break it down into day/weeks/years
    let yyyy = todaysDate.getFullYear();
    let mm = todaysDate.getMonth() + 1; // starts at 0
    let dd = todaysDate.getDate();
    // add 0's to the start of days and months if needed
    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    // Return formated date
    const formatedDate = dd + "/" + mm + "/" + yyyy;
    setCurrentDate(formatedDate);

    let hh = todaysDate.getHours();
    let min = todaysDate.getMinutes();
    let ss = todaysDate.getSeconds();

    if (hh < 10) hh = "0" + hh;
    if (min < 10) min = "0" + min;
    if (ss < 10) ss = "0" + ss;

    const formatedTime = `${hh}:${min}:${ss}`;
    setCurrentTime(formatedTime);
  }, []);

  return (
    <section className="grid p-2 grid-rows-reg">
      {/* Course infomation header */}
      <header className="grid lg:grid-flow-col justify-between rounded-xl p-4 bg-neo-alt h-fit">
        <article>
          <h3 className="font-semibold">{currentCourseData.title}</h3>
          <h4>{currentCourseData.description}</h4>
        </article>
        <article className="grid items-center text-xl pr-2">
          <div className="flex gap-4">
            <span>{currentDate}</span>
            <span>{currentTime}</span>
          </div>
        </article>
      </header>

      {/* Main */}
      <section className="grid lg:grid-cols-mb mt-6 gap-6">
        {/* Course overview */}
        <section className="grid bg-neo-alt rounded-xl font-medium">
          <CourseDataOverview />
        </section>
        {/* Other Sections */}
        <section className="grid lg:grid-rows-f21 gap-6">
          <section className="grid lg:grid-cols-2 gap-6">
            {/* News feed */}
            <NewsfeedContainer />
            {/* User Overview */}
            <CourseUserOverview />
          </section>
          <CourseOverviewLeaderboard />
        </section>
      </section>
    </section>
  );
}

export default CourseDataPanel;
