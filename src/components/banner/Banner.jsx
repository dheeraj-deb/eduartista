import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import styles from "./Banner.module.css";

const images = [
  {
    src: "https://images.unsplash.com/photo-1501168025369-84d106f7a5eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallHeading: "Explore Our World",
    heading: "Kiddista: The Kids Magazine by EduArtista",
    description:
      "Subscribe to EduArtista's Kiddista for ages 3-7 and our upcoming Junior Magazine for ages 7-12. Enjoy monthly deliveries of educational stories, competitions, and creative activities right to your doorstep.",
    buttonLabel1: "Learn More",
    buttonLabel2: "Join Now",
  },
  {
    src: "https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallHeading: "Nurturing Creativity",
    heading: "Empowering Young Minds Through Creative Learning",
    description:
      'EduArtista Learning Solution LLP is dedicated to providing innovative and creative learning experiences for kids. Our flagship product, "Kiddista," is designed for kids aged 3-7. Subscribe today for monthly deliveries!',
    buttonLabel1: "Explore Now",
    buttonLabel2: "Sign Up",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1681488394409-5614ef55488c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    smallHeading: "Join Our Community",
    heading: "Why Choose EduArtista?",
    description:
      "Our magazines blend education and creativity, offering engaging content, educational competitions, and comprehensive learning experiences. Subscribe now to receive new issues monthly!",
    buttonLabel1: "Get Started",
    buttonLabel2: "Contact Us",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showContent, setShowContent] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const nextSlide = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setShowContent(true);
    }, 500);
  };

  const prevSlide = () => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setShowContent(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowContent(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const notify = () => {
    setIsButtonDisabled(true);

    toast("Stay tuned!", {
      type: "success",
      onClose: () => setIsButtonDisabled(false),
    });
  };

  return (
    <div className={styles.banner}>
      <img
        src={images[currentIndex].src}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.bannerImage}
      />
      <div className={styles.overlay}>
        {showContent && (
          <>
            <h3 className={`${styles.overlaySmallHeading} ${styles.fadeIn}`}>
              {images[currentIndex].smallHeading}
            </h3>
            <h2 className={`${styles.overlayHeading} ${styles.fadeIn}`}>
              {images[currentIndex].heading}
            </h2>
            <p className={`${styles.overlayDescription} ${styles.fadeIn}`}>
              {images[currentIndex].description}
            </p>
            <div className={styles.buttonContainer}>
              <button
                className={`${styles.customButton} ${styles.fadeIn}`}
                onClick={notify}
                disabled={isButtonDisabled}
              >
                {images[currentIndex].buttonLabel1}
              </button>
              <button
                className={`${styles.customButton} ${styles.fadeIn}`}
                onClick={notify}
                disabled={isButtonDisabled}
              >
                {images[currentIndex].buttonLabel2}
              </button>
            </div>
          </>
        )}
        <div className={styles.navButtons}>
          <button className={styles.prevButton} onClick={prevSlide}>
            ❮
          </button>
          <button className={styles.nextButton} onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
