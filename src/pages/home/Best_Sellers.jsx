import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Link from "next/link";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
// import { useRouter } from "next/router";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Best_Sellers() {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     axios.get(`/api/Product?By=Category&Category=All`).then((deta) => {
  //       setData(deta.data.Product);
  //     });
  //   }, [useRouter()]);

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <div className="row g-0 px-[30px] md:px-[56px]">
        <div className="col-sm-6 d-flex justify-content-start">
          <h1 className="text-4xl">
            <b>Best Sellers</b>
          </h1>
        </div>
        <div className="col-sm-6 d-flex justify-content-end">
          <a href="/product-listing">
            <a>
              <h5 className="text-muted ">
                <b>
                  View All Products <i className="fas fa-chevron-right"></i>
                </b>
              </h5>
            </a>
          </a>
        </div>
      </div>
      <Carousel responsive={responsive} classNameName="py-4">
        {[
          {
            title: "Glamour Avenue",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as2.ftcdn.net/v2/jpg/01/34/95/79/1000_F_134957942_Gta5V1G41izwt8uq66qVDDikBeOdnjit.jpg",
          },
          {
            title: "Couture Chronicles",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as1.ftcdn.net/v2/jpg/04/20/67/24/1000_F_420672456_I58WrEKU64mIiUXhc5Tj3xK3tGOC7pQG.jpg",
          },
          {
            title: "Style Spectrum",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as2.ftcdn.net/v2/jpg/02/50/76/49/1000_F_250764968_4QqktKHpot2GjgAb1IddirOFNXK65YY0.jpg",
          },
          {
            title: "Trendsetters Today",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as2.ftcdn.net/v2/jpg/00/12/31/47/1000_F_12314707_AnvQ9303PjpvYFMKCnVdCc3pizk0xgGx.jpg",
          },
          {
            title: "Glamour Avenue",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as2.ftcdn.net/v2/jpg/01/34/95/79/1000_F_134957942_Gta5V1G41izwt8uq66qVDDikBeOdnjit.jpg",
          },
          {
            title: "Couture Chronicles",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as1.ftcdn.net/v2/jpg/04/20/67/24/1000_F_420672456_I58WrEKU64mIiUXhc5Tj3xK3tGOC7pQG.jpg",
          },
          {
            title: "Style Spectrum",
            cprice: 900,
            oprice: 1889,
            image:
              "https://as2.ftcdn.net/v2/jpg/02/50/76/49/1000_F_250764968_4QqktKHpot2GjgAb1IddirOFNXK65YY0.jpg",
          },
        ].map((datas) => (
          <div key={1} className="px-3">
            <Link to={`/product`}>
              <section className="p-5 text-left transform duration-500 hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
                <img src={datas.image} alt="" />
                <h2 className="font-semibold mb-2 mt-6 text-cyan-600">
                  Popular Collection
                </h2>
                <h1 className="text-2xl mb-5 h-15">Vogue Essence</h1>
                <div className="space-x-1 flex mb-5">
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-orange-600"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                  </svg>
                  <svg
                    className="w-4 h-4 mx-px fill-current text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 14 14"
                  >
                    <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z" />
                  </svg>
                </div>
                <p className="mb-5">
                  Indulge in the world of haute couture and street style with
                  our fashion magazine.
                </p>
                <h2 className="font-semibold mb-5">$32.99</h2>
                <button className="p-2 px-6 bg-red-500 text-white rounded-md hover:bg-red-600">
                  Add To Cart
                </button>
              </section>
            </Link>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default Best_Sellers;
