import React from "react";
import { useState } from "react";
// Data
import { courseContextInitData } from '../utils/data/CourseData';

export const CourseContext = React.createContext();

const CourseContextProvider = ({ children }) => {
  const [currentCourseData, setCurrentCourseData] = useState(courseContextInitData);

  return (
    <CourseContext.Provider
      value={{
        currentCourseData,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
