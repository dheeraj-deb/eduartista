import React from "react";

import './style.css';

function ParallaxLandingPage() {
  return (
    <>
      <section className="hero" id="top">
        <img
        // src="assets/eduart.png"
        // alt="minecraft"
        // className="minecraft-title"
        />
      </section>

      <section className="minecraft-sentence"></section>

      {/* <section className="sub-hero">
        <div className="game-decrption">
          A game made up of blocks, creatures, and community.
        </div>
        <div className="container"></div>
      </section> */}

      <div className="blocks-section">
        <div className="block w" style={{ backgroundColor: "maroon" }}>
          <h2>Kiddista</h2>
          <div className="info">
            <img
              className="block-img"
              src="/assets/blocks/kiddista.jpg"
              alt="dirt block"
            />

            <div className="description">
              <p>
                Adventure awaits in WonderKids magazine! Explore fascinating
                worlds, solve puzzles, and uncover secrets with our captivating
                stories and interactive activities. Ignite curiosity and inspire
                young minds to dream big. Join us on a journey of discovery and
                imagination today!
              </p>

              <table>
                <tr>
                  <td>Renewable</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Stackable</td>
                  <td>Yes (64)</td>
                </tr>
                <tr>
                  <td>Blast resistance</td>
                  <td>0.5</td>
                </tr>
                <tr>
                  <td>Hardness</td>
                  <td>0.5</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="block b" style={{ backgroundColor: "#d7cb8e" }}>
          <h2>Edu Artista</h2>

          <div className="info">
            <img
              className="block-img"
              src="./assets/blocks/edumag.jpg"
              alt="wood block"
            />

            <div className="description b-t">
              <p>
                Wood, known as Bark blocks, is a type of block similar to
                logs.However, all sides of the cube have the log textures.
              </p>

              <table>
                <tr>
                  <td>Flamable</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Catches Fire</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Blast resistance</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>Hardness</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="block w" style={{ backgroundColor: "#2b2b2b" }}>
          <h2>PaperCraft kit</h2>

          <div className="info">
            <img
              className="block-img"
              src="./assets/blocks/pap.jpg"
              alt="coal block"
            />

            <div className="description">
              <p>
                Blocks of coal can be used as fuel in a furnace. One block of
                coal lasts 800 seconds (16000 ticks), which smelts 80 items.
              </p>

              <table>
                <tr>
                  <td>Stackable</td>
                  <td>Yes (64)</td>
                </tr>
                <tr>
                  <td>Blast resistance</td>
                  <td>5</td>
                </tr>
                <tr>
                  <td>Hardness</td>
                  <td>5</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="block b" style={{ backgroundColor: "#9cf9e6" }}>
          <h2>Diamond Block</h2>

          <div className="info">
            <img
              className="block-img"
              src="./assets/blocks/diamond-block.png"
              alt="diamond block"
            />

            <div className="description b-t">
              <p>
                Blocks of diamond can be used to 'power' a beacon. The beacon
                can be powered by a 3×3 square of diamond blocks underneath it.
              </p>

              <table>
                <tr>
                  <td>Stackable</td>
                  <td>Yes (64)</td>
                </tr>
                <tr>
                  <td>Blast resistance</td>
                  <td>6</td>
                </tr>
                <tr>
                  <td>Hardness</td>
                  <td>2</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="animals">
        <div className="animalcontainer1 animalcontainer">
          <h1 className="title">Parrot</h1>
          <div className="card">
            <img
              className="photo a1"
              src="assets/animals/Blue_Parrot.webp"
              alt="Blue Parrot"
            />

            <p className="animal-description">
              Parrots are passive and swims in water by flapping its wings. A
              parrot flies and usually flies upward if it is struck; parrots
              flap their wings and fall slowly, preventing fall damage. Parrots
              fly under normal conditions, but they can tire and return to the
              ground after a short time.
            </p>
          </div>
        </div>

        <div className="animalcontainer2 animalcontainer">
          <h1 className="title w">Panda</h1>
          <div className="card reverse-flex">
            <img
              className="photo a2"
              src="assets/animals/Panda.webp"
              alt="Panda"
            />

            <p className="animal-description">
              Pandas have a main gene and a hidden gene, each assigned to a
              particular trait. Normal, aggressive, lazy, worried, and playful
              personalities are dominant traits, while weak and brown
              personalities are recessive traits.
            </p>
          </div>
        </div>

        <div className="animalcontainer3 animalcontainer">
          <h1 className="title w">Axolotl</h1>
          <div className="card">
            <img
              className="photo a3"
              src="assets/animals/Lucy_Axolotl.webp"
              alt="Axolotl"
            />

            <p className="animal-description">
              Pandas have a main gene and a hidden gene, each assigned to a
              particular trait. Normal, aggressive, lazy, worried, and playful
              personalities are dominant traits, while weak and brown
              personalities are recessive traits.
            </p>
          </div>
        </div>
      </div>

      <section className="last">
        <span className="end">THE END!</span>

        <div className="char1">
          <img src="./assets/animals/Ender_Dragon.webp" alt="Ender Dragon" />
        </div>

        <div className="char2">
          <img src="./assets/animals/Enderman.webp" alt="Enderman" />
        </div>
      </section>
    </>
  );
}

export default ParallaxLandingPage;
