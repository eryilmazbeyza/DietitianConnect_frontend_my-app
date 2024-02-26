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
                    <img src="assets/dummy/billur.jpeg" alt="" />
                  </figure>
                </div>
                <div className="col-md-6 col-md-offset-1">
                  <h2>
                    Merhaba, <br /> Ben Dyt. Billur Kuzudişli
                  </h2>
                  <p>
                    Deneyimlerim ve eğitimlerimle sizlere sağlıklı bir yaşamın
                    kapılarını açmaya hazırım. Kurumsal ve bireysel danışmanlık
                    hizmetiyle birlikte, fonksiyonel tıp diyetisyenliği ve
                    psikoloji alanındaki bilgi birikimimle size özel çözümler
                    sunuyorum. Obezite ve Metabolik Cerrahi'deki klinik
                    deneyimlerimle kuvvetlenen pratiğim, şimdi kendi işimde de
                    sizlere en iyi hizmeti sunmak için devam ediyor. Sağlıklı
                    beslenme ve zihinsel uyumun bir araya geldiği bu yolculukta,
                    benimle birlikte adım atın. Sağlıklı ve dengeli bir yaşam
                    için birlikte çalışmak için sabırsızlanıyorum.{" "}
                  </p>
                  <ul className="person-detail">
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-baby.png" alt="" />
                      </span>
                      Doğum Tarihi: <strong>10.01.1996</strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-map-marker.png" alt="" />
                      </span>
                      Şehir: <strong>İstanbul</strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-heart.png" alt="" />
                      </span>
                      Eğitim:{" "}
                      <strong>
                        Lisans | Beslenme ve Diyetetik , Yeditepe Üniversitesi
                        <br />
                        Yüksek Lisans | Psikoloji , Yeditepe Üniversitesi
                      </strong>
                    </li>
                    <li>
                      <span className="icon">
                        <img src="assets/images/icon-clock.png" alt="" />
                      </span>
                      Deneyim: <strong>4 yıl</strong>
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
