import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserLarge,
  faTimes,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import logo from "../../../public/assets/logo.jpg";
import icon from "../../../src/assets/Genie.png";
import books from "../../../src/assets/books.jpeg";
import paperCraft from "../../../src/assets/paper-craft.png";
const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [navOverlayVisible, setNavOverlayVisible] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [subHeading, setSubHeading] = useState(null);
  const [dropdownValues, setDropdownValues] = useState(null);
  const [expandedSubheading, setExpandedSubheading] = useState(null);

  const handleSubheadingClick = (key) => {
    setExpandedSubheading(expandedSubheading === key ? null : key);
  };
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
    if (window.innerWidth < 769) {
      setNavOverlayVisible(!navOverlayVisible);
    }
  };

  const hoverContentMap = {
    SUBSCRIPTION: {
      table: (
        <table>
          <tbody>
            <tr>
              <th>
                <h2>MONTHLY SUBSCRIPTIONS</h2>
              </th>
              <th>
                <h2>QUARTERLY SUBSCRIPTIONS</h2>
              </th>
              <th>
                <h2>MORE</h2>
              </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Young Adult Book & Goodies</li>
                  <li>Young Adult Book Only</li>
                  <li>Adult Fantasy Book Only</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Romantasy</li>
                  <li>Romance</li>
                  <li>Horror</li>
                  <li>Sci-fi</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Gifts</li>
                  <li>Past Boxes</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      image: (
        <div className={styles.hoverContentImageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Subscription Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Subscription Image 2"
          />
        </div>
      ),
      subheadings: {
        monthly: "Explore Monthly Plans",
        quarterly: "Discover Quarterly Offers",
        more: "More Subscription Options",
      },
      dropdownValues: {
        monthly: [
          "Young Adult Book & Goodies",
          "Young Adult Book Only",
          "Adult Fantasy Book Only",
        ],
        quarterly: ["Romantasy", "Romance", "Horror", "Sci-fi"],
        more: ["Gifts", "Past Boxes"],
      },
    },
    BOOKS: {
      table: (
        <table>
          <tbody>
            <tr>
              <th>
                <h2>PAST BOOKS & BOXES</h2>
              </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Young Adult Boxes</li>
                  <li>Adult Fantasy Books</li>
                  <li>Limited Edition Boxes</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      image: (
        <div className={styles.hoverContentImageWrapper}>
          <img src={books} alt="Books & Boxes Image 1" />
          <img src={books} alt="Books & Boxes Image 2" />
        </div>
      ),
      subheadings: {
        pastBooks: "Previous Selections",
      },
      dropdownValues: {
        pastBooks: [
          "Young Adult Boxes",
          "Adult Fantasy Books",
          "Limited Edition Boxes",
        ],
      },
    },
    "CRAFT & KIT": {
      table: (
        <table>
          <tbody>
            <tr>
              <th>
                <h2>BOOKS & BOXES</h2>
              </th>
              <th>
                <h2>STORE COLLECTIONS</h2>
              </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Past Boxes</li>
                  <li>Exclusive Books</li>
                  <li>Limited Editions</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Proud Reader Collection</li>
                  <li>Flowers Collection</li>
                  <li>Rebecca Ross Collection</li>
                  <li>Owlcrate Exclusives</li>
                  <li>Ozwald Merch</li>
                  <li>All Collections</li>
                  <li>All Products</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      image: (
        <div className={styles.hoverContentImageWrapper}>
          <img src={paperCraft} alt="Store Image 1" />
          <img src={paperCraft} alt="Store Image 2" />
        </div>
      ),
      subheadings: {
        booksBoxes: "Creative Selections",
        storeCollections: "Explore Our Collections",
      },
      dropdownValues: {
        booksBoxes: ["Past Boxes", "Exclusive Books", "Limited Editions"],
        storeCollections: [
          "Proud Reader Collection",
          "Flowers Collection",
          "Rebecca Ross Collection",
          "Owlcrate Exclusives",
          "Ozwald Merch",
          "All Collections",
          "All Products",
        ],
      },
    },
    "READER'S NEST": {
      table: (
        <table>
          <tbody>
            <tr>
              <th>
                <h2>COMMUNITY</h2>
              </th>
              <th>
                <h2>BOOK RECS & MORE</h2>
              </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>The Nest App</li>
                  <li>Spotify Playlists</li>
                  <li>Social Collective</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Readers' Blog</li>
                  <li>Eduartista News</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      image: (
        <div className={styles.hoverContentImageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Readers Nest Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Readers Nest Image 2"
          />
        </div>
      ),
      subheadings: {
        community: "Join Our Community",
        bookRecommendations: "Get Book Recommendations",
      },
      dropdownValues: {
        community: ["The Nest App", "Spotify Playlists", "Social Collective"],
        bookRecommendations: ["Readers' Blog", "Eduartista News"],
      },
    },
    "ABOUT US": {
      table: (
        <table>
          <tbody>
            <tr>
              <th>
                <h2>MEET EDUARTISTA</h2>
              </th>
              <th>
                <h2>PARTNERSHIPS</h2>
              </th>
              <th>
                <h2>MORE</h2>
              </th>
            </tr>
            <tr>
              <td>
                <ul>
                  <li>Meet The Team</li>
                  <li>Mission, Vision & Values</li>
                  <li>Our Story</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>Authors</li>
                  <li>Artists & Small Businesses</li>
                  <li>Giving Back</li>
                </ul>
              </td>
              <td>
                <ul>
                  <li>EduArtista Press</li>
                  <li>Membership</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      ),
      image: (
        <div className={styles.hoverContentImageWrapper}>
          <img
            src="https://images.unsplash.com/photo-1692742593528-ad97f591ff3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us Image 1"
          />
          <img
            src="https://images.unsplash.com/photo-1622519624366-1b06e2f2aa0d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="About Us Image 2"
          />
        </div>
      ),
      subheadings: {
        meetEduartista: "Get to Know Us",
        partnerships: "Our Collaborations",
        more: "Explore More",
      },
      dropdownValues: {
        meetEduartista: [
          "Meet The Team",
          "Mission, Vision & Values",
          "Our Story",
        ],
        partnerships: ["Authors", "Artists & Small Businesses", "Giving Back"],
        more: ["EduArtista Press", "Membership"],
      },
    },
  };

  const handleItemClick = (item) => {
    if (window.innerWidth < 769) {
      setHoveredItem(item === hoveredItem ? null : item);
      console.log("Item:", item);
      console.log("Hovered Item:", hoveredItem);

      setSubHeading(hoverContentMap[item].subheadings);
      setDropdownValues(hoverContentMap[item].dropdownValues);
    }
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
          {loggedIn ? "User Name" : <FontAwesomeIcon icon={faUserLarge} />}
        </div>
      </div>
      {!navOverlayVisible && (
        <nav className={`${styles.nav} ${isNavVisible ? styles.visible : ""}`}>
          <ul className={styles.navItems}>
            {Object.keys(hoverContentMap).map((item) => (
              <li
                key={item}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          {!navOverlayVisible && hoveredItem && (
            <div className={styles.hoverContent}>
              {hoverContentMap[hoveredItem]?.table}
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
            {dropdownValues && subHeading && (
              <button
                onClick={() => {
                  setSubHeading(null), setDropdownValues(null);
                }}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            )}
            {!dropdownValues && (
              <ul className={styles.navItemsMob}>
                {Object.keys(hoverContentMap).map((item) => (
                  <li
                    key={item}
                    onClick={() => handleItemClick(item)}
                    style={{ display: "flex" }}
                  >
                    {item}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: "auto" }}
                    />
                  </li>
                ))}
              </ul>
            )}
            {dropdownValues && (
              <div className={styles.dropdownValues}>
                {Object.keys(dropdownValues)?.map((key) => (
                  <div key={key}>
                    <h3 onClick={() => handleSubheadingClick(key)}>
                      {subHeading[key]}
                    </h3>
                    {expandedSubheading === key && (
                      <ul>
                        {dropdownValues[key].map((value) => (
                          <li key={value}>{value}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
            {hoveredItem && (
              <div className={styles.hoverContent}>
                {/* {hoverContentMap[hoveredItem].table} */}
                {hoverContentMap[hoveredItem].image}
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
