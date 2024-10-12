import React, { useState } from "react";
import { toast } from "react-toastify";
import books from "../../../src/assets/books.jpeg";
import paperCraft from "../../../src/assets/paper-craft.png";
import styles from "./CardSection.module.css"; // Use CSS Modules for styling

const cards = [
  {
    title: "",
    description: "",
    imageUrl: books,
  },
  {
    title: "",
    description: "",
    imageUrl: paperCraft,
  },
  {
    title: "Empower Young Minds",
    description:
      "Join EduArtista to inspire creativity and learning in children.",
    imageUrl:
      "https://images.unsplash.com/photo-1561331109-af9d653b6aa4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CardSection = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const notify = () => {
    setIsButtonDisabled(true);

    toast("Stay tuned!", {
      type: "success",
      className: "custom-toast custom-toast-success",
      bodyClassName: "custom-toast-message",
      onClose: () => setIsButtonDisabled(false),
    });
  };
  return (
    <section className={styles.cardSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.bigHeading}>Nurture Your Child’s Creativity!</h2>
        <p className={styles.mediumText}>
          Explore our engaging magazines designed to inspire young learners.
        </p>
      </div>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={styles.card}
            style={{ backgroundImage: `url(${card.imageUrl})` }}
          >
            <h4 className={styles.cardTitle}>{card.title}</h4>
            <p className={styles.cardDescription}>{card.description}</p>
            <button
              className={styles.cardButton}
              onClick={notify}
              disabled={isButtonDisabled}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
