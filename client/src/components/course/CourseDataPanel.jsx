import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "../../context/CourseContext";

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
  // title: "Worlds Smartest Person 2023-2024",
  // description: "The first year the greatest intelligence exam is taking place.",
  // semesters: ['Autumn', 'Spring', 'Summer'],
  // numSemesters: 3,
  //   currentSemester: 'Autumn',
  //   daysCompleted: 1,
  //   totalDays: 345,
  // totalScore: 6000,
  // numUsers: 2,
  // isActive: true,
  // startDate: "",
  // endDate: "",
  return (
    <section className="grid p-2">
      {/* Course infomation header */}
      <header className="grid grid-flow-col justify-between rounded-xl p-4 bg-neo h-fit">
        <article>
          <h3 className="font-semibold">{currentCourseData.title}</h3>
          <h4>{currentCourseData.description}</h4>
        </article>
        <article className="grid">
          <span>PARTICIPANTS: {currentCourseData.numUsers}</span>
          <div className='flex gap-4'>
            <span>{currentDate}</span>
            <span>{currentTime}</span>
          </div>
        </article>
      </header>
    </section>
  );
}

export default CourseDataPanel;
