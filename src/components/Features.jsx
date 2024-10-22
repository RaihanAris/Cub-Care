"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

const Features = () => {
  return (
    <>
      <section className="features pt-36 pb-28 relative" id="features">
        <div className="container px-10 w-full mx-auto">
          <h1 className="text-center text-3xl font-bold text-pink-500 pb-4">
            Our <span className="text-teal-500">Features</span>
          </h1>
          <p className="text-center max-w-md mx-auto text-sm pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            mollitia a laborum pariatur autem impedit.xs
          </p>
          <div className="h-40 sm:h-60 xl:h-80 2xl:h-96 w-full md:w-1/2 mx-auto">
            <Carousel pauseOnHover>
              <img src="features/f-1.png" alt="..." />
              <img src="features/f-2.png" alt="..." />
              <img src="features/f-3.png" alt="..." />
            </Carousel>
          </div>

          {/* Cub Care */}
          <div className="cub-care pt-16">
            <h3 className="mb-3 py-1 px-5 text-center text-lg font-bold text-teal-500 rounded-3xl border-2 border-teal-400 max-w-fit mx-auto">
              Oder Cub Care
            </h3>
            <p className="text-center pb-4">
              Berikut Adalah Cub Care atau Pengasuh Kami!
            </p>
            <div className="card gap-3 flex flex-wrap items-center justify-center">
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/1.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Putri</span> Anjasmani (25)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Barat{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 2 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/2.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Bunga</span> Pertiwi (24)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Timur{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 1.5 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/3.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Indah</span> Wina Amalia (26)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang
                  Selatan <br />
                  <span className="font-semibold">Pengalaman</span> : 4 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/4.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Jessica</span> Caroline (23)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Barat{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 1 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Cub Nest */}
          <div className="cub-care pt-16">
            <h3 className="mb-3 py-1 px-5 text-center text-lg font-bold text-teal-500 rounded-3xl border-2 border-teal-400 max-w-fit mx-auto">
              Oder Cub Nest
            </h3>
            <p className="text-center pb-4">
              Berikut Adalah Cub Nest yang Bekerja Sama dengan Kami!
            </p>
            <div className="card gap-3 flex flex-wrap items-center justify-center">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="features/CubNest/12.png"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Sejahtera Cub Nest Semarang
                </h5>
                <p className="text0sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Operasional</span> : <br />
                  Senin : 09.00 - 17.00
                  <br />
                  Selasa : 09.00 - 17.00
                  <br />
                  Rabu : 09.00 - 17.00
                  <br />
                  Kamis : 09.00 - 17.00
                  <br />
                  Jumat : 09.00 - 17.00
                  <br />
                  Sabtu : 09.00 - 17.00
                  <br />
                  Minggu : 09.00 - 17.00
                  <br />
                  <br />
                  <span className="font-semibold">Note</span> : Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Vero laborum
                  exercitationem maxime reprehenderit quae veniam nisi magnam
                  alias maiores ipsam.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.200.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="features/CubNest/13.png"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Amanah Cub Nest Semarang
                </h5>
                <p className="text0sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Operasional</span> : <br />
                  Senin : 09.00 - 17.00
                  <br />
                  Selasa : 09.00 - 17.00
                  <br />
                  Rabu : 09.00 - 17.00
                  <br />
                  Kamis : 09.00 - 17.00
                  <br />
                  Jumat : 09.00 - 17.00
                  <br />
                  Sabtu : 09.00 - 17.00
                  <br />
                  Minggu : 09.00 - 17.00
                  <br />
                  <br />
                  <span className="font-semibold">Note</span> : Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Vero laborum
                  exercitationem maxime reprehenderit quae veniam nisi magnam
                  alias maiores ipsam.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.200.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="features/CubNest/14.png"
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Bocil Club Cub Nest Semarang
                </h5>
                <p className="text0sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Operasional</span> : <br />
                  Senin : 09.00 - 17.00
                  <br />
                  Selasa : 09.00 - 17.00
                  <br />
                  Rabu : 09.00 - 17.00
                  <br />
                  Kamis : 09.00 - 17.00
                  <br />
                  Jumat : 09.00 - 17.00
                  <br />
                  Sabtu : 09.00 - 17.00
                  <br />
                  Minggu : 09.00 - 17.00
                  <br />
                  <br />
                  <span className="font-semibold">Note</span> : Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Vero laborum
                  exercitationem maxime reprehenderit quae veniam nisi magnam
                  alias maiores ipsam.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.200.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Cub Able */}
          <div className="cub-care pt-16">
            <h3 className="mb-3 py-1 px-5 text-center text-lg font-bold text-teal-500 rounded-3xl border-2 border-teal-400 max-w-fit mx-auto">
              Oder Cub Able
            </h3>
            <p className="text-center pb-4">
              Berikut Adalah Cub Able atau Pengasuh Khusus untuk Anak
              Berkebutuhan Khusus
            </p>
            <div className="card gap-3 flex flex-wrap items-center justify-center">
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/1.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Putri</span> Anjasmani (25)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Barat{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 2 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/2.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Bunga</span> Pertiwi (24)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Timur{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 1.5 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/3.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Indah</span> Wina Amalia (26)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang
                  Selatan <br />
                  <span className="font-semibold">Pengalaman</span> : 4 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
              <Card
                className="max-w-sm"
                imgSrc="features/CubCare/4.png"
                horizontal
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <span className="text-pink-600">Jessica</span> Caroline (23)
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400">
                  <span className="font-semibold">Lokasi</span> : Semarang Barat{" "}
                  <br />
                  <span className="font-semibold">Pengalaman</span> : 1 Tahun{" "}
                  <br />
                  <span className="font-semibold">Catatan</span> : Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Officiis, enim.
                </p>
                <div className="cost flex justify-between items-center">
                  <p className="text-teal-700">Rp.100.000 / Sesi</p>
                  <p className="text-sm rounded-full border-2 border-teal-700  px-3 py-2 text-teal-700 hover:bg-teal-700 hover:text-white">
                    Pilih
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
