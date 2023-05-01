import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { CourseContext } from "../../context/CourseContext";

function CourseDataOverview() {
  const { currentCourseData } = useContext(CourseContext);

  return (
    <div className="">
      <article className="">
        <article className="grid text-center w-full">
          <h4 className="border-b-2 border-solid border-colour-pale py-2 text-xl">
            Course Overview
          </h4>
        </article>
        <div className="grid grid-rows-rev py-4 px-4">
          <ul className="grid gap-1">
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Current Semester:</span>
                <span>{currentCourseData.currentSemester}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Start Date:</span>
                <span> {currentCourseData.courseStartDate}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Participants: </span>
                <span>{currentCourseData.numUsers}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Current Day: </span>
                <span>{currentCourseData.currentDay}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Total Days of Course:</span>
                <span>{currentCourseData.totalDays}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Semester Start Date:</span>
                <span>{currentCourseData.semesterStarted}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Semester End Date:</span>
                <span>{currentCourseData.semesterEnds}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>New Users This Semester:</span>
                <span>{currentCourseData.newUsersThisSemester}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Next Semester Start Date:</span>
                <span>{currentCourseData.nextSemesterStarts}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Next Semester:</span>
                <span>{currentCourseData.nextSemesterName}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Total Questions Asked:</span>
                <span>{currentCourseData.totalQuestionsAsked}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Total Score:</span>
                <span>{currentCourseData.totalScore}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Semester Correct Score Percentage:</span>
                <span>{currentCourseData.semesterCorrectAnswerPercentage}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Course Correct Score Percentage:</span>
                <span>{currentCourseData.courseCorrectAnswerPercentage}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Results Day:</span>
                <span>{currentCourseData.courseResultsDate}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className="flex justify-between w-[95%] md:w-[80%] mx-auto">
                <span>Course End Date:</span>
                <span>{currentCourseData.courseEndDate}</span>
              </article>
            </li>
          </ul>

          <div className="grid mt-6">
            <Link to="/beta-test-questions">
              <button className="bg-neo-in w-full p-4 active:scale-110 duration-150 ease-in-out">
                Play Now
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CourseDataOverview;
