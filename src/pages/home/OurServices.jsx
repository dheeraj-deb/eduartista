import React from "react";
import "./style.css";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and presentation",
    img: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast delivery",
    des: "We deliver your order promptly to your door",
    img: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering n",
    img: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    img: "/images/home/services/icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left side */}
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Ambitions And Services</h2>
            <p className="my-5 text-base font-medium text-secondary leading-[30px]">
              Embark on a journey of literacy and empowerment with our online
              magazine marketplace. As an agent member, not only do you earn
              commissions for every new member you introduce, but you also play
              a pivotal role in promoting reading and education. Each new reader
              you bring onboard contributes to the spread of knowledge and the
              cultivation of a more enlightened society. Join us in championing
              the power of reading while earning rewards for your advocacy.
              Together, let's make a difference, one page at a time.
            </p>
          </div>
        </div>

        {/* Right side */}
        <section className="section feature section section--bg-offwhite-one">
          <div className="container">
            <h2 className="font-title--md text-center mb-6">
              Why You'll Learn with Eduguard
            </h2>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="cardFeature">
                  <div className="cardFeature__icon cardFeature__icon--bg-g">
                    <svg
                      width="32"
                      height="28"
                      viewBox="0 0 32 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2H10.4C11.8852 2 13.3096 2.5619 14.3598 3.5621C15.41 4.56229 16 5.91885 16 7.33333V26C16 24.9391 15.5575 23.9217 14.7699 23.1716C13.9822 22.4214 12.9139 22 11.8 22H2V2Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30 2H21.6C20.1148 2 18.6904 2.5619 17.6402 3.5621C16.59 4.56229 16 5.91885 16 7.33333V26C16 24.9391 16.4425 23.9217 17.2302 23.1716C18.0178 22.4214 19.0861 22 20.2 22H30V2Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="font-title--xs">250k online course</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce sed commodo enim Fusce sed.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="cardFeature">
                  <div className="cardFeature__icon cardFeature__icon--bg-b">
                    <svg
                      width="28"
                      height="27"
                      viewBox="0 0 28 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.3855 12.224C21.8743 12.224 23.8915 10.2067 23.8915 7.71794C23.8915 5.23054 21.8743 3.21191 19.3855 3.21191"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.4575 17.1211C22.201 17.1717 22.939 17.2783 23.6675 17.4395C24.6775 17.6404 25.8938 18.0546 26.3257 18.9607C26.6018 19.5415 26.6018 20.218 26.3257 20.7989C25.8952 21.705 24.6775 22.1191 23.6675 22.3269"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5994 18.0913C15.6425 18.0913 19.9504 18.8553 19.9504 21.9071C19.9504 24.9604 15.6699 25.7503 10.5994 25.7503C5.55624 25.7503 1.24976 24.9877 1.24976 21.9345C1.24976 18.8813 5.52891 18.0913 10.5994 18.0913Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5993 13.7349C7.27274 13.7349 4.60767 11.0684 4.60767 7.74188C4.60767 4.41669 7.27274 1.75024 10.5993 1.75024C13.9259 1.75024 16.5923 4.41669 16.5923 7.74188C16.5923 11.0684 13.9259 13.7349 10.5993 13.7349Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="font-title--xs">Expert Instructors</h5>
                  <p>
                    Vivamus interdum neque massa, eget mattis mi gravida eget.
                    Donec et dictum justo. Vivamus interdum.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="cardFeature">
                  <div className="cardFeature__icon cardFeature__icon--bg-r">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M25.2502 13.2495C25.2502 19.8774 19.8781 25.2495 13.2502 25.2495C6.62235 25.2495 1.25024 19.8774 1.25024 13.2495C1.25024 6.62162 6.62235 1.24951 13.2502 1.24951C19.8781 1.24951 25.2502 6.62162 25.2502 13.2495Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.7021 17.0667L12.8113 14.1491V7.86108"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h5 className="font-title--xs">Lifetime Access</h5>
                  <p>
                    Vivamus cursus libero quis lobortis mattis. Suspendisse in
                    malesuada mi. Maecenas vel euismod turpis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurServices;
