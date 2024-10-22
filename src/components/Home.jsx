import React from "react";

const Home = () => {
  return (
    <>
      <section className="home pt-44 h-screen relative" id="home">
        <div className="container md:mx-auto">
          <div className="flex flex-wrap items-center justify-center mx-auto px-10">
            <div className="mb-10 md:w-1/2">
              <h1 className="text-4xl text-teal-500 font-bold pb-4">
                Cub Day Care
              </h1>
              <h4 className="text-sm pb-10 max-w-cl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto fuga reiciendis, debitis, itaque temporibus dolorum
                assumenda, doloremque voluptatibus sequi perferendis a. Eum, sit
                esse?
              </h4>
              <a
                href="#about"
                className="rounded-full bg-teal-400 px-4 py-3 text-white "
              >
                Get Started!
              </a>
            </div>
            <div className="md:w-1/2 w-[80%] flex justify-center items-center px-8">
              <img src="home/home.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
