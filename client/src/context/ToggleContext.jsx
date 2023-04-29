import React from "react";
import { useState } from "react";

export const ToggleContext = React.createContext();

const ToggleContextProvider = ({ children }) => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const [toggleInfoDisplay, setToggleInfoDisplay] = useState(false);
  const [toggleBetaTestDisplay, setToggleBetaTestDisplay] = useState(false);
  const [toggleBugReportDisplay, setToggleBugReportDisplay] = useState(false);

  const toggleNavbar = () => {
    setToggleNavigation(!toggleNavigation);
  };

  const toggleBugReport = () => {
    setToggleBugReportDisplay(!toggleBugReportDisplay);
  };

  // Buttons on home page 
  const toggleBetaButton = () => {
    setToggleBetaTestDisplay(!toggleBetaTestDisplay);
  };

  const toggleInfoButton = () => {
    console.log('click');
    setToggleInfoDisplay(!toggleInfoDisplay);
  };

  return (
    <ToggleContext.Provider
      value={{
        toggleNavbar,
        toggleBetaButton,
        toggleInfoButton,
        toggleBugReport,
        toggleInfoDisplay,
        toggleBetaTestDisplay,
        toggleBugReportDisplay,
        toggleNavigation,
      }}
    >
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleContextProvider;
