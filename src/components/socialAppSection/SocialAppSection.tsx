import React from "react";
import referfriend from "../../assets/refer-a-friend.avif";
import styles from "./SocialAppSection.module.css"; // Use CSS Modules for styling

const SocialAppSection = () => {
  return (
    <section className={styles.socialAppSection}>
      <div className={styles.imageContainer}>
        <img
          src={referfriend}
          alt="Kiddista Magazine"
          className={styles.appImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h3 className={styles.smallHeading}>Join Our Community</h3>
        <h2 className={styles.mainHeading}>
          Create Your Own Income with EduArtista!
        </h2>
        <p className={styles.description}>
          Earn extra income by promoting EduArtista’s educational magazines.
          Sign up, share with your network, and earn ₹100 for every subscription
          using your referral.
        </p>

        <ul className={styles.pointsList}>
          <li>Register as an agent and get a Referral ID.</li>
          <li>Promote EduArtista magazines to friends and family.</li>
          <li>Earn ₹100 per subscription referred through your ID.</li>
          <li>Withdraw earnings after referring two subscribers.</li>
        </ul>

        <ul className={styles.pointsList}>
          <li>Work from home at your own pace.</li>
          <li>Support children’s education while earning.</li>
          <li>No upfront investment required.</li>
        </ul>

        <button className={styles.joinButton}>Start Earning Today</button>
      </div>
    </section>
  );
};

export default SocialAppSection;
