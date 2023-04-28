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
          <ul className="grid gap-1"></ul>
          <li>
            <span>Current Semester: {userRecords.currentSemester}</span>
          </li>
        </section>
      </article>
    </section>
  );
}

export default CourseUserOverview;
