import React, { useContext } from "react";
// Context
import { CourseContext } from "../../context/CourseContext";

function CourseDataOverview() {
  const { currentCourseData } = useContext(CourseContext);

  return (
    <div className="p-4">
      <article>
        <h4 className="border-b-2 border-solid border-colour-pale pb-2">
          Course Overview
        </h4>
        <div className="py-4">
          <ul className="grid gap-1">
            <li>
              <span>Current Semester: {currentCourseData.currentSemester}</span>
            </li>
            <li>
              <span>Start Date: {currentCourseData.courseStartDate}</span>
            </li>
            <li>
              <span>Participants: {currentCourseData.numUsers}</span>
            </li>
            <li>
              <span>Current Day: {currentCourseData.currentDay}</span>
            </li>
            <li>
              <span>Total Days of Course: {currentCourseData.totalDays}</span>
            </li>
            <li>
              <span>
                Semester Start Date: {currentCourseData.semesterStarted}
              </span>
            </li>
            <li>
              <span>Semester End Date: {currentCourseData.semesterEnds}</span>
            </li>
            <li>
              <span>
                New Users This Semester:{" "}
                {currentCourseData.newUsersThisSemester}
              </span>
            </li>
            <li>
              <span>
                Next Semester Start Date: {currentCourseData.nextSemesterStarts}
              </span>
            </li>
            <li>
              <span>Next Semester: {currentCourseData.nextSemesterName}</span>
            </li>
            <li>
              <span>
                Total Questions Asked: {currentCourseData.totalQuestions}
              </span>
            </li>
            <li>
              <span>
                Total Score: {currentCourseData.totalScore} Hiq points
              </span>
            </li>
            <li>
              <span>
                Semester Correct Score Percentage:{" "}
                {currentCourseData.semesterCorrectAnswerPercentage}
              </span>
            </li>
            <li>
              <span>
                Course Correct Score Percentage:{" "}
                {currentCourseData.courseCorrectAnswerPercentage}
              </span>
            </li>
            <li>
              <span>Results Day: {currentCourseData.courseResultsDate}</span>
            </li>
            <li>
              <span>End Date: {currentCourseData.courseEndDate}</span>
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
}

export default CourseDataOverview;
