import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function CourseUserOverview() {
  const { userRecords, setUserRecords } = useContext(UserContext);

  return (
    <section className="grid grid-rows-reg bg-neo-alt rounded-xl">
      <article className="grid text-center w-full">
        <h4 className="border-b-2 border-solid border-colour-pale py-2 text-xl">
          User Overview
        </h4>

        <section className="py-4">
          <ul className="grid gap-1 px-4">
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Username:</span>
                <span>{userRecords.username}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Semester Completed:</span>
                <span>{userRecords.currentSemesterCompletePercentage}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Course Completed:</span>
                <span>{userRecords.currentCourseCompletePercentage}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Questions Answered:</span>
                <span>{userRecords.numQuestionsAnswered}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Days Uncompleted:</span>
                <span>{userRecords.daysUncompleted}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Country Ranking:</span>
                <span>{userRecords.currentCountryRank}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>World Ranking:</span>
                <span>{userRecords.currentWorldRank}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Time Taken:</span>
                <span>{userRecords.timeTaken}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Semesters Completed:</span>
                <span>{userRecords.semestersCompleted}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Times Voted:</span>
                <span>{userRecords.votesCast}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Date Joined:</span>
                <span>{userRecords.dateJoined}</span>
              </article>
            </li>
            <li className="bg-neo">
              <article className='flex justify-between w-[95%] md:w-[80%] mx-auto'>
                <span>Times Reset:</span>
                <span>{userRecords.timesResetScores}</span>
              </article>
            </li>
          </ul>
        </section>
      </article>
    </section>
  );
}

export default CourseUserOverview;
