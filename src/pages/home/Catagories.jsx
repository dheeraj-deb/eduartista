import React from "react";

const Categories = () => {
  return (
    <div className="mt-20 pt-10 px-5 md:px-10">
      <h1 className="px-3.5 md:px-0 md:text-center font-title--md text-3xl md:text-4xl text-black">
        Browse Top Categories
      </h1>
      <section className="container mx-auto p-10 md:py-20 px-3.5 antialiased ">
        <section className="grid lg:grid-cols-2 2xl:grid-cols-3 grid-cols-1 gap-10 md:gap-40 ">
          <article
            className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
            style={{
              backgroundImage:
                "url(https://as2.ftcdn.net/v2/jpg/02/41/55/49/1000_F_241554919_aR4WafsD153xMBVuQKqXXIRxSixLfMV5.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 h-full">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Kiddista Magazine
              </h1>
              <div className="w-16 h-2 bg-yellow-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Kiddista: The Monthly educational comic magazine for kids (Ages
                3-7)
              </p>
            </div>
          </article>

          <article
            className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
            style={{
              backgroundImage:
                "url(https://as2.ftcdn.net/v2/jpg/02/95/48/59/1000_F_295485945_TtDDon8GSBqB7wbRCCtHLPwWH6NcMWwg.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 h-full">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Junior Magazine
              </h1>
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                Junior Magazine: A World of Learning for Older Kids (Ages 7-12)
              </p>
            </div>
          </article>

          <article
            className="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group"
            style={{
              backgroundImage:
                "url(https://as2.ftcdn.net/v2/jpg/04/81/12/53/1000_F_481125398_sBKxpqGYZpF9YgiFs4yNkK7v8o8Y0twB.jpg)",
            }}
          >
            <div className="bg-black bg-opacity-20 min-h-150 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 ">
              <h1 className="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                Explore Our Educational Insights
              </h1>
              <div className="w-16 h-2 bg-orange-500 rounded-full mb-10 transform translate-y-20 group-hover:translate-y-0 duration-300"></div>
              <p className="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500">
                The Importance of Early Childhood Education
              </p>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
};

export default Categories;
