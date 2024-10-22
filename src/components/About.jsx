("use client");
import React from "react";
import { Carousel } from "flowbite-react";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const About = () => {
  const [openCare, setOpenCare] = useState(false);
  const [openNest, setOpenNest] = useState(false);
  const [openAble, setOpenAble] = useState(false);
  return (
    <>
      <section
        className="about pt-36 bg-pink-100 h-1vh pb-36 relative"
        id="about"
      >
        <div className="container px-10 mx-auto w-full">
          <h1 className="text-center text-3xl font-bold text-pink-500 pb-4">
            About <span className="text-teal-500">Us</span>
          </h1>
          <p className="max-w-lg text-center text-sm mx-auto font-semibold pb-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            autem quos excepturi culpa debitis rerum ipsum itaque quas dolorem
          </p>
          <div className="flex flex-wrap items-center justify-center ">
            <div className="h-40 sm:h-60 xl:h-80 2xl:h-96 w-full md:w-1/2">
              <Carousel slideInterval={3000} className="px-9">
                <div className="flex h-full items-center justify-center bg-[url('about/8.png')] bg-cover">
                  <h1 className="text-xl font-semibold text-white text-center px-4">
                    Sibuk dengan Kerja, Tapi Ingin Si Kecil Tidak Kesepian di
                    Rumah?
                  </h1>
                </div>
                <div className="flex h-full items-center justify-center bg-[url('about/9.png')] bg-cover">
                  <h1 className="text-xl font-semibold text-white text-center px-4">
                    Ingin Daycare yang Dekat dengan Rumah Anda dan Mempunyai
                    Kualitas yang Baik?
                  </h1>
                </div>
                <div className="flex h-full items-center justify-center bg-[url('about/10.png')] bg-cover">
                  <h1 className="text-xl font-semibold text-white text-center px-4">
                    Mempunyai Anak dengan Keterbatasan dan Ingin Pengasuh
                    Berpengalaman?
                  </h1>
                </div>
              </Carousel>
            </div>
            <div className="md:w-1/2 pt-5">
              <p className="pb-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam consequatur esse ullam recusandae placeat obcaecati?
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus, voluptate.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquid voluptas aperiam illo, tempora delectus repellat
                laudantium quos nam esse hic dolorem vero necessitatibus, eius
                vel maiores impedit asperiores? Quidem, debitis!
              </p>
              <div className="modal flex gap-3">
                <Button
                  onClick={() => setOpenCare(true)}
                  gradientMonochrome="pink"
                >
                  Cub Care
                </Button>
                <Modal
                  dismissible
                  show={openCare}
                  onClose={() => setOpenCare(false)}
                >
                  <Modal.Header>Cub Care</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem voluptatem eius maiores cupiditate placeat! Sunt
                        magni voluptatibus voluptatem
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenCare(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={() => setOpenNest(true)}
                  gradientMonochrome="cyan"
                >
                  Cub Nest
                </Button>
                <Modal
                  dismissible
                  show={openNest}
                  onClose={() => setOpenNest(false)}
                >
                  <Modal.Header>Cub Nest</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem voluptatem eius maiores cupiditate placeat! Sunt
                        magni voluptatibus voluptatem
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenNest(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
                <Button
                  onClick={() => setOpenAble(true)}
                  gradientMonochrome="teal"
                >
                  Cub Able
                </Button>
                <Modal
                  dismissible
                  show={openAble}
                  onClose={() => setOpenAble(false)}
                >
                  <Modal.Header>Cub Able</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem voluptatem eius maiores cupiditate placeat! Sunt
                        magni voluptatibus voluptatem
                      </p>
                      <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        The European Union’s General Data Protection Regulation
                        as possible of high-risk data breaches that could
                        personally affect them.
                      </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={() => setOpenAble(false)}>Close</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
          <div className="social-media">
            <p className="text-center pt-8 font-semibold text-lg">
              Our Social Media
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <a
                href=""
                className="rounded-full bg-pink-400 w-8 h-8 flex items-center justify-center text-black hover:bg-pink-500"
              >
                <i className="ri-instagram-line text-lg"></i>
              </a>
              <a
                href=""
                className="rounded-full bg-pink-400 w-8 h-8 flex items-center justify-center text-black hover:bg-pink-500"
              >
                <i className="ri-tiktok-line"></i>
              </a>
              <a
                href=""
                className="rounded-full bg-pink-400 w-8 h-8 flex items-center justify-center text-black hover:bg-pink-500"
              >
                <i className="ri-facebook-circle-fill"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
