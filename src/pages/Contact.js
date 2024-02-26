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
                Bize Ulaşın, Sağlıklı Bir Başlangıç İçin Adım Atın!
              </h2>
              <p>
                Sağlığınız bizim için önemli. Sorularınızı, ihtiyaçlarınızı veya
                sağlıklı bir yaşam için başlamak istediğiniz adımları paylaşın.
                Size en uygun çözümü birlikte bulalım. İletişim kurun, sağlıklı
                bir başlangıç için birlikte hareket edelim!
              </p>

              <div class="contact-detail">
                <span class="location">
                  <img src="assets/images/icon-map-marker-alt.png" alt="" /> Ataşehir, İstanbul
                </span>
                <span class="email">
                  <img src="assets/images/icon-envelope.png" alt="" />{" "}
                  <a href="assets/mailto:billurkuzudisli@gmail.com">
                  billurkuzudisli@gmail.com
                  </a>
                </span>
                <span class="phone">
                  <img src="assets/images/icon-phone.png" alt="" />{" "}
                  <a href="assets/tel:(+90)5365054033">(+90)536 505 40 33</a>
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
