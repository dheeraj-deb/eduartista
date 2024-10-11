import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer className={styles.footer}>
        <nav className={styles.footerNav}>
          <header className={styles.footerHeader}>Services</header>
          <a className={styles.footerLink}>Branding</a>
          <a className={styles.footerLink}>Design</a>
          <a className={styles.footerLink}>Marketing</a>
          <a className={styles.footerLink}>Advertisement</a>
        </nav>
        <nav className={styles.footerNav}>
          <header className={styles.footerHeader}>Company</header>
          <a className={styles.footerLink}>About us</a>
          <a className={styles.footerLink}>Contact</a>
          <a className={styles.footerLink}>Jobs</a>
          <a className={styles.footerLink}>Press kit</a>
        </nav>
        <nav className={styles.footerNav}>
          <header className={styles.footerHeader}>Legal</header>
          <a className={styles.footerLink}>Terms of use</a>
          <a className={styles.footerLink}>Privacy policy</a>
          <a className={styles.footerLink}>Cookie policy</a>
        </nav>
      </footer>

      <hr className={styles.footerDivider} />

      <div className={styles.footerBottom}>
        <aside className={styles.footerInfo}>
          <p className={styles.footerCopyright}>
            Copyright © 2023 - All rights reserved by EduArtista
          </p>
          <p className={styles.socialMediaHeader}>JOIN OUR SOCIAL MEDIA</p>
          <div className={styles.socialLinks}>
            <a
              href="https://www.instagram.com/kiddista_kidsmagazine?igsh=MWkzZnc2eHg3OGg2Mg=="
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faSquareInstagram} /> Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61562513450323&mibextid=ZbWKwL"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faSquareFacebook} /> Facebook
            </a>
            <a
              href="https://youtube.com/@kiddista?si=hLBp61mAmh9pD8gR"
              className={styles.socialLink}
            >
              <FontAwesomeIcon icon={faSquareYoutube} /> YouTube
            </a>
          </div>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
            infoeduartista2gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Contact: 7306684905
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
