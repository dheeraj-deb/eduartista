import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLarge, faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import logo from "../../../public/assets/logo.jpg";
import icon from "../../../src/assets/Genie.png";
import books from "../../../src/assets/books.jpeg";
import paperCraft from "../../../src/assets/paper-craft.png";
import Modal from "../Modal";
import { loginContext } from "../../layout/Main";
const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navOverlayVisible, setNavOverlayVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const { token, username, logout } = useContext(loginContext);

  useEffect(() => {
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleUsernameClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    logout();
    setDropdownVisible(false);
  };

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    if (window.innerWidth < 769) {
      setNavOverlayVisible(!navOverlayVisible);
    }
  };
  const handleItemClick = (item) => {
    if (window.innerWidth < 769) {
      setHoveredItem(item === hoveredItem ? null : item);
    }
  };

  const hoverContentMap = {
    SUBSCRIPTION: (
      <>
        <table>
          <tbody>
            <tr>
              <td>Join our subscription service for a unique experience!</td>
            </tr>
            <tr>
              <td>
                Receive curated boxes filled with exclusive content tailored
                just for you.
              </td>
            </tr>
            <tr>
              <td>
                Each month, enjoy a surprise selection of books, activities, and
                learning materials delivered to your doorstep.
              </td>
            </tr>
            <tr>
              <td>
                Perfect for fostering creativity and a love of reading in
                children!
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Subscription Image 1"
        />
        <img
          src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Subscription Image 2"
        />
      </>
    ),
    BOOKS: (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                Dive into our extensive collection of books and educational
                boxes.
              </td>
            </tr>
            <tr>
              <td>
                Each box includes engaging stories and interactive activities
                designed to spark imagination and enhance learning.
              </td>
            </tr>
            <tr>
              <td>
                From classic literature to contemporary favorites, there’s
                something for every young reader!
              </td>
            </tr>
            <tr>
              <td>
                Explore our themed boxes, tailored to various interests and age
                groups.
              </td>
            </tr>
          </tbody>
        </table>
        <img src={books} alt="Books & Boxes Image 1" />
        <img src={books} alt="Books & Boxes Image 2" />
      </>
    ),
    " CRAFT & KIT ": (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                Welcome to our store, your one-stop shop for all things
                creative!
              </td>
            </tr>
            <tr>
              <td>
                Browse through a variety of products, including art supplies,
                educational toys, and creative kits.
              </td>
            </tr>
            <tr>
              <td>
                Whether you're looking for materials for a project or a special
                gift, you’ll find it here!
              </td>
            </tr>
            <tr>
              <td>Don’t miss out on our exclusive discounts and promotions.</td>
            </tr>
          </tbody>
        </table>
        <img src={paperCraft} alt="Store Image 1" />
        <img src={paperCraft} alt="Store Image 2" />
      </>
    ),
    "READER'S NEST": (
      <>
        <table>
          <tbody>
            <tr>
              <td>
                Join our Reader's Nest community, where young minds connect and
                share their love for books!
              </td>
            </tr>
            <tr>
              <td>
                Participate in book discussions, storytelling sessions, and
                creative writing workshops.
              </td>
            </tr>
            <tr>
              <td>
                Share your favorite reads and discover new ones through
                recommendations from fellow members.
              </td>
            </tr>
            <tr>
              <td>
                Become part of a vibrant community that celebrates creativity
                and learning!
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Readers Nest Image 1"
        />
        <img
          src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Readers Nest Image 2"
        />
      </>
    ),
    "ABOUT US": (
      <>
        <table>
          <tbody>
            <tr>
              <td>Learn about our mission and vision at EduArtista.</td>
            </tr>
            <tr>
              <td>
                We strive to empower young minds through creative learning
                experiences that inspire curiosity and innovation.
              </td>
            </tr>
            <tr>
              <td>
                Our team is passionate about providing high-quality resources
                that foster a love of reading and creativity.
              </td>
            </tr>
            <tr>
              <td>
                Discover how we engage with communities and contribute to
                education through various programs and initiatives.
              </td>
            </tr>
          </tbody>
        </table>
        <img
          src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us Image 1"
        />
        <img
          src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="About Us Image 2"
        />
      </>
    ),
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={styles.hamburger} onClick={toggleNav}>
          &#9776;
        </div>
        <div className={styles.companyName}>
          <img className={styles.logo} src={logo} alt="EduArtista Logo" />
          <img className={styles.iconic} src={icon} alt="" />
        </div>
        <div className={styles.loginRegister}>
          {loggedIn ? (
            <div
              onMouseEnter={handleUsernameClick}
              onMouseLeave={handleUsernameClick}
              onClick={handleUsernameClick}
              className={styles.username}
            >
              Hello, {username}
              {dropdownVisible && (
                <div className={styles.dropdown}>
                  <button
                    onClick={handleLogout}
                    className={styles.logoutButton}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <FontAwesomeIcon
              icon={faUserLarge}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                const modal = document.getElementById("my_modal_5");
                modal.showModal();
              }}
            />
          )}
        </div>
      </div>
      {!navOverlayVisible && (
        <nav className={`${styles.nav} ${isNavVisible ? styles.visible : ""}`}>
          <ul className={styles.navItems}>
            {Object.keys(hoverContentMap).map((item) => (
              <li
                key={item}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                {item}
              </li>
            ))}
          </ul>
          {hoveredItem && (
            <div className={styles.hoverContent}>
              {hoverContentMap[hoveredItem]}
            </div>
          )}
        </nav>
      )}

      {navOverlayVisible && (
        <div className={styles.navOverlay}>
          <div className={styles.closeIcon} onClick={toggleNav}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <nav className={styles.navMob}>
            <ul className={styles.navItems}>
              {Object.keys(hoverContentMap).map((item) => (
                <li key={item} onClick={() => handleItemClick(item)}>
                  {item}
                </li>
              ))}
            </ul>
            {hoveredItem && (
              <div className={styles.hoverContent}>
                {hoverContentMap[hoveredItem]}
              </div>
            )}
          </nav>
        </div>
      )}
      <Modal />
    </header>
  );
};

export default Navbar;
