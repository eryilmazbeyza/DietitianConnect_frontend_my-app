import React, { Fragment } from "react";
import Footer from "./Footer";
import Menu from "./Menu";

function Contact() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />
        <main class="main-content">
          <div class="content">
            <div class="container">
              <h2 class="entry-title">
                Curabitur sit amet ultricies felis nunc ultrices gravida
                fringilla in volutpat massa vitae elementum tincidunt
              </h2>
              <p>
                Pellentesque erat erat, mattis non feugiat pharetra, viverra nec
                mauris. Nullam sed risus aliquam, congue nunc ac, convallis mi.
                Cras pellentesque sit amet urna fermentum ornare. Sed in metus
                justo. Cras sit amet odio eu enim condimentum pretium vitae nec
                enim. In aliquet dolor nisl.
              </p>

              <div class="contact-detail">
                <span class="location">
                  <img src="assets/images/icon-map-marker-alt.png" alt=""/> 559 Avenue
                  Street, New York
                </span>
                <span class="email">
                  <img src="assets/images/icon-envelope.png" alt=""/>{" "}
                  <a href="assets/mailto:office@companyname.com">
                    office@companyname.com
                  </a>
                </span>
                <span class="phone">
                  <img src="assets/images/icon-phone.png" alt=""/>{" "}
                  <a href="assets/tel:(942)321490234">(942) 321 490 234</a>
                </span>
              </div>

              <div class="map"></div>

              <div class="contact-form">
                <div class="row">
                  <div class="col-md-5">
                    <input type="text" placeholder="Your name..." />
                    <input type="text" placeholder="Email..." />
                    <input type="text" placeholder="Website..." />
                  </div>
                  <div class="col-md-7">
                    <textarea placeholder="Message..."></textarea>
                    <input type="submit" value="Send message" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- .main-content --> */}

        <Footer />
      </div>

      <script src="assets/js/jquery-1.11.1.min.js"></script>
      <script src="assets/http://maps.google.com/maps/api/js?sensor=false&amp;language=en"></script>
      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/app.js"></script>
    </Fragment>
  );
}

export default Contact;
