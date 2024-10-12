import React, { useState, useRef } from "react";
import books from "../../../src/assets/books.jpeg";
import paperCraft from "../../../src/assets/paper-craft.png";
import styles from "./SideScrollSection.module.css"; // Use CSS Modules for styling

const images = [
  {
    src: books,
    smallHeading: "KIDDISTA MAGAZINE",
    mainHeading: "Kiddista Magazine",
    subHeading: "Educational Fun for Kids",
    content:
      "A monthly comic magazine designed for kids aged 3-7, featuring engaging stories, competitions, and creative activities that inspire imagination and learning.",
  },
  {
    src: paperCraft,
    smallHeading: "JUNIOR MAGAZINE",
    mainHeading: "Junior Magazine",
    subHeading: "Inspiring Creativity",
    content:
      "Coming soon for kids aged 7-12, this magazine will include comic stories, spoken English content, and exciting competitions to foster creativity and learning.",
  },
  {
    src: paperCraft,
    smallHeading: "EDUARTISTA",
    mainHeading: "Craft Lot",
    subHeading: "Paper cut and craft",
    content:
      "Join EduArtista and empower young minds through engaging educational resources designed to cultivate creativity and inspire lifelong learning.",
  },
  {
    src: "https://images.unsplash.com/photo-1633856364580-97698963b68b?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallHeading: "EXPLORE MORE",
    mainHeading: "Unlock New Adventures",
    subHeading: "Join Us Today!",
    content:
      "Explore a wide range of subscriptions and resources tailored for young learners. Dive into a world of creativity and knowledge with our expertly crafted materials.",
  },
];

const SideScrollSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const leftSideRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX; // Store the starting touch position
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX; // Update the ending touch position
  };

  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      touchStartX.current - touchEndX.current > 50
    ) {
      // Swipe left
      setCurrentIndex((prevIndex) =>
        Math.min(prevIndex + 1, images.length - 1)
      );
    }
    if (
      touchStartX.current !== null &&
      touchEndX.current !== null &&
      touchStartX.current - touchEndX.current < -50
    ) {
      // Swipe right
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    }
  };

  const handleScroll = () => {
    if (leftSideRef.current) {
      const containerHeight = leftSideRef.current.clientHeight;
      const scrollTop = leftSideRef.current.scrollTop;
      const newIndex = Math.floor(scrollTop / containerHeight);
      setCurrentIndex(Math.min(newIndex, images.length - 1));
    }
  };

  return (
    <div className={styles.sideScrollSection}>
      <div
        className={styles.leftSide}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onScroll={handleScroll}
        ref={leftSideRef} // Add reference for scroll handling
      >
        {images.map((image, index) => (
          <div className={styles.imageContainer} key={index}>
            <img
              src={image.src}
              alt={`Image ${index + 1}`}
              className={styles.image}
            />
          </div>
        ))}
      </div>
      <div className={styles.currentIndexImage}>
        <img src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} />
      </div>
      <div className={styles.rightSide}>
        <h3 className={styles.miniHeading}>
          {images[currentIndex].smallHeading}
        </h3>
        <h2 className={styles.bigHeading}>
          {images[currentIndex].mainHeading}
        </h2>
        <h4 className={styles.subHeading}>{images[currentIndex].subHeading}</h4>
        <p className={styles.content}>{images[currentIndex].content}</p>
        <span className={styles.learnMore}>Learn More</span>

        {/* Dots for navigation */}
        <div className={styles.dotContainer}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.activeDot : ""
              }`}
              onClick={() => setCurrentIndex(index)} // Click to change the current index
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideScrollSection;
