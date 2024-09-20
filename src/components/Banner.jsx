import React from 'react';

const Banner = () => {
  return (
    <div className="section-container  bg-white ">
      <div className="py-30 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
        {/* small cards */}
        <div className="md:w-2/5  ">
          <img src="/h5.jpg" alt="banner" className="w-full h-[800px]" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4"></div>
        </div>
        {/* Text */}
        <div className="md:w-1/2 space-y-7 px-4">
          <div className="  rounded-3xl shadow-xl  p-8 px-10 bg-simpleLightYellow">
            <h2 className="md:text-4xl text-gray-800 text-4xl font-bold md:leading-snug leading-snug">
              Unlocking Minds, One Page at a Time: Explore the World of
              Knowledge <span className="text-textYellow ">EDU artista</span>
            </h2>
            <p className="text-gray-600 text-lg mt-4">
              EduArtista.it: Your gateway to a world of knowledge through
              curated magazines. Explore diverse topics, ignite your curiosity,
              and enrich your mind. With us, learning becomes an inspiring
              journey accessible to all. Empower yourself with EduArtista.it
            </p>
            <a href="/">
              <button className="bg-yellow-300 shadow-2xl  text-slate-700 px-8 py-3 hover:bg-yellow-500  font-semibold mt-8 rounded-full hover:shadow-none hover:bg-green-600 transition-all duration-300">
                Order Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;