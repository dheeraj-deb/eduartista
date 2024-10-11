import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styles from "./SubscriptionOptions.module.css";

const commonHeading = {
  smallHeading: "SUBSCRIPTION OPTIONS",
  mainHeading: "Young Adult Section",
  content:
    "Choose from our engaging subscription options tailored to your interests. Experience exciting stories that resonate with your journey.",
};

const options = [
  {
    buttonLabel: "Option 1: Monthly Subscription",
    cards: [
      {
        title: "Monthly",
        actualPrice: "₹1,660.00",
        crossedPrice: "₹2,075.00",
        totalPrice: "₹1,660.00 + Shipping",
      },
      {
        title: "3-Month Prepay",
        actualPrice: "₹2,325.00",
        crossedPrice: "₹2,490.00",
        totalPrice: "₹6,975.00 + Shipping",
      },
      {
        title: "6-Month Prepay",
        actualPrice: "₹2,240.00",
        crossedPrice: "₹2,490.00",
        totalPrice: "₹13,440.00 + Shipping",
      },
    ],
  },
  {
    buttonLabel: "Option 2: Kids Subscription",
    cards: [
      {
        title: "Monthly",
        actualPrice: "₹2,406.00",
        crossedPrice: "₹2,905.00",
        totalPrice: "₹2,406.00 + Shipping",
      },
      {
        title: "3-Month Prepay",
        actualPrice: "₹2,572.00",
        crossedPrice: "₹2,905.00",
        totalPrice: "₹7,716.00 + Shipping",
      },
      {
        title: "6-Month Prepay",
        actualPrice: "₹2,240.00",
        crossedPrice: "₹2,490.00",
        totalPrice: "₹13,440.00 + Shipping",
      },
    ],
  },
  {
    buttonLabel: "Option 3: Mixed Subscription",
    cards: [
      {
        title: "Monthly",
        actualPrice: "₹2,075.00",
        crossedPrice: "₹2,490.00",
        totalPrice: "₹2,075.00 + Shipping",
      },
      {
        title: "3-Month Prepay",
        actualPrice: "₹6,225.00",
        crossedPrice: "₹7,470.00",
        totalPrice: "₹6,225.00 + Shipping",
      },
      {
        title: "6-Month Prepay",
        actualPrice: "₹11,952.00",
        crossedPrice: "₹14,940.00",
        totalPrice: "₹11,952.00 + Shipping",
      },
    ],
  },
];

const SubscriptionOptions = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.subscriptionOptions}>
      <h3 className={styles.smallHeading}>{commonHeading.smallHeading}</h3>
      <h2 className={styles.mainHeading}>{commonHeading.mainHeading}</h2>
      <p className={styles.content}>{commonHeading.content}</p>

      <div className={styles.buttonContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.optionButton} ${
              selectedOption === index ? styles.selectedButton : ""
            }`}
            onClick={() => setSelectedOption(index)}
          >
            {option.buttonLabel}
          </button>
        ))}
      </div>

      {isMobile ? (
        <Slider {...settings}>
          {options[selectedOption].cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <div className={styles.cardPrices}>
                <span className={styles.actualPrice}>{card.actualPrice}</span>
                <br /> {/* This ensures the crossed price is on a new line */}
                <span className={styles.crossedPrice}>{card.crossedPrice}</span>
              </div>
              <p className={styles.cardTotalPrice}>{card.totalPrice}</p>
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.cardContainer}>
          {options[selectedOption].cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <h4 className={styles.cardTitle}>{card.title}</h4>
              <div className={styles.cardPrices}>
                <span className={styles.actualPrice}>{card.actualPrice}</span>
                <br /> {/* This ensures the crossed price is on a new line */}
                <span className={styles.crossedPrice}>{card.crossedPrice}</span>
              </div>
              <p className={styles.cardTotalPrice}>{card.totalPrice}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default SubscriptionOptions;
