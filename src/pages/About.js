import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function About() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />

        <main className="main-content">
          <div className="author-bio">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <figure className="profile-picture">
                    <img src="assets/dummy/person.jpg" alt="" />
                  </figure>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <h2>
                    Hello, <br /> I am Name Surname
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </p>
                  <ul className="person-detail">
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-baby.png" alt="" />
                      </span>
                      Born: <strong>08.05.1985</strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-map-marker.png" alt="" />
                      </span>
                      City: <strong>New York</strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-heart.png" alt="" />
                      </span>
                      Favourites: <strong>Lorem ipsum, Dolor sit</strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-clock.png" alt="" />
                      </span>
                      Experience: <strong>6 years</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- .main-content --> */}

        <Footer />
      </div>

      <script src="js/jquery-1.11.1.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/app.js"></script>
    </Fragment>
  );
}

export default About;
