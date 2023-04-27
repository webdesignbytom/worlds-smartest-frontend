import React from "react";
// Components
// Images
import Cat from "../../assets/images/404cat.png";
import Navbar from "../../components/nav/Navbar";

function Error404() {
  return (
    <div className="h-screen grid grid-rows-reg overflow-hidden font-pops">
      <Navbar />
      <main className="relative h-full w-full">
        <section className="grid absolute w-full text-center h-full items-center justify-center z-10">
          <section className="grid gap-2">
            <article className="outline outline-2 font-semibold outline-black -mt-10 p-2 rounded">
              <h1 className="text-4xl">
                ERROR <span className="text-red-500">404</span>
              </h1>
              <h2 className="text-4xl">PAGE NOT FOUND</h2>
            </article>
            <article className="outline outline-2 font-semibold outline-black rounded">
              <h3>But you found a friend 💖</h3>
            </article>
          </section>
        </section>
        <section className="flex lg:justify-end lg:mr-20">
          <img src={Cat} alt="lost cat" />
        </section>
      </main>
    </div>
  );
}

export default Error404;
