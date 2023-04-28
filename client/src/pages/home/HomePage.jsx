import React from "react";
import { Link } from "react-router-dom";
// Components
import PromoBoxes from "../../components/home/PromoBoxes";
import QuestionModal from "../../components/home/QuestionModal";
import BetaModal from "../../components/home/BetaModal";
import Navbar from "../../components/nav/Navbar";

function HomePage() {
  return (
    <div className="bg-main-colour font-poppins grid grid-rows-reg min-h-screen lg:max-h-screen lg:overflow-hidden text-gray-100">
      <Navbar />
      <div className="grid p-3 md:px-6">
        <section className="bg-neo rounded-xl">
          <main className="relative grid grid-rows-rev h-full">
            {/* Question mark */}
            <QuestionModal />
            {/* Beta test */}
            <BetaModal />
            {/* Text and CTA */}
            <section className="grid h-full">
              <div className="grid rounded-xl">
                <section className="mb-4 grid h-full px-2">
                  <section className='mt-6'>
                    <article className="text-center">
                      <h1 className="text-6xl uppercase mb-4 font-bold">
                        The World's Smartest
                      </h1>
                      <h2 className="text-3xl font-semibold">
                        The world's formost intelligence test
                      </h2>
                      <h3 className="text-2xl text-center mt-10 mb-4">
                        Starting{" "}
                        <span className="font-semibold">1st October 2023</span>{" "}
                        until{" "}
                        <span className="font-semibold">July 31st 2024</span>
                      </h3>
                    </article>
                  </section>

                  {/* CTA */}
                  <section className="grid justify-center h-fit">
                    <article className="text-center">
                      <p>
                        The only intelligence test to allow the users to decide
                        what counts as true intelligence!
                      </p>
                      <p>
                        Prizes for the new
                        <span className="font-semibold text-yellow-600 italic">
                          {" "}
                          Worlds Smartest Person{" "}
                        </span>
                        and runner up and regional categories
                      </p>
                      <p>
                        Not your average <span className="font-bold">IQ</span>{" "}
                        test!
                      </p>
                    </article>

                    <article className="leading-5 w-full py-4">
                      <h4 className="text-2xl text-center">
                        Reserve your spot to take part now!
                      </h4>
                      <div className="px-3 py-2">
                        <Link className="" to="/sign-up">
                          <button className="bg-neo-alt w-full rounded-lg p-2 my-5 md:my-2 text-2xl text-white font-bold">
                            Sign Up Now!
                          </button>
                        </Link>
                      </div>
                      <h5 className="text-center text-lg">
                        Have <span className="italic">your</span> say on the
                        results without taking part by{" "}
                        <Link to="sign-up">
                          <span className="italic text-blue-500">
                            signing up{" "}
                          </span>
                        </Link>
                        for free!
                      </h5>
                    </article>
                  </section>
                </section>
              </div>
            </section>

            {/* Boxes */}
            <section className="grid h-fit mt-16 mb-10 md:mt-0 md:my-4 mx-6 lg:mx-10 lg:mb-6">
              <div className="px-1">
                <div className="text-center flex items-center justify-center bg-neo-alt mb-4 p-2">
                  <h5 className="text-2xl">SPECIAL FEATURES</h5>
                </div>
              </div>
              <section className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-4">
                <PromoBoxes />
              </section>
            </section>
          </main>
        </section>

        <section className="md:hidden mt-6 mb-20 grid">
          <Link to="/beta-test-questions">
            <article className="p-4 text-center text-xl bg-neo-alt rounded-xl active:scale-110 ease-in-out duration-200">
              <button>PLAY NOW!</button>
            </article>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
