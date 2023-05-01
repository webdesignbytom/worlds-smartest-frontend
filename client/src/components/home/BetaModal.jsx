import React, { useContext } from "react";
import { Link } from "react-router-dom";
// Icons
import { TbBeta } from "react-icons/tb";
import { ToggleContext } from "../../context/ToggleContext";

function BetaModal() {
  const { toggleBetaTestDisplay, toggleBetaButton } = useContext(ToggleContext);
  return (
    <section
      onClick={toggleBetaButton}
      className="absolute bg-neo p-1 md:p-4 rounded-2xl no__highlights grid left-4 top-4"
    >
      <div className="flex justify-start items-center">
        <TbBeta size={40} className="cursor-pointer hidden md:grid" />
        <TbBeta size={30} className="cursor-pointer md:hidden" />
        <span className="pr-1">
          <p>BETA TEST</p>
        </span>
      </div>
      {toggleBetaTestDisplay && (
        <article className="m-2 bg-neo-in p-2 outline outline-2 outline-black dark:outline-white rounded-lg max-w-[300px]">
          <p>
            We are looking for help while we develop the testing environment and
            fix any bugs we can find. If you would like to test the system by
            answering a few practice test questions. Please{" "}
            <Link to="/beta-test-questions">
              <span className="font-semibold text-yellow-300">click here</span>
            </Link>{" "}
            to the beta test zone.
          </p>
        </article>
      )}
    </section>
  );
}

export default BetaModal;
