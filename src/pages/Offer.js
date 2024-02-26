import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Offer() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />

        <main className="main-content">
          <div className="content">
            <div className="container">
              <h2 className="entry-title">
                Diyet Teklifleriyle Sağlıklı Bir Yaşama Adım Atın!
              </h2>
              <p>
                Merhaba, ben Dyt. Billur Kuzudişli. Sağlıklı bir yaşam sürmek
                istiyorsanız doğru yerdesiniz! Size özel beslenme programları ve
                danışmanlık hizmetleriyle hayalinizdeki sağlıklı yaşama bir adım
                daha yaklaşabilirsiniz.{" "}
              </p>
              <hr />
              <h3>Aylık Tekliflerimiz:</h3>
              <br />

              <div className="row">
                <div className="col-md-3">
                  <div className="feature color-purple">
                    <div className="feature-icon">
                      <i className="icon-bowl"></i>
                    </div>
                    <h3 className="feature-title">
                      Temel Paket: Sağlıklı Başlangıç
                    </h3>
                    <p>
                      Bireysel Beslenme Danışmanlığı <br />
                      Haftalık Takip ve Raporlama
                      <br />
                      Özel Beslenme Programı{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-green">
                    <div className="feature-icon">
                      <i className="icon-oil"></i>
                    </div>
                    <h3 className="feature-title">
                      Orta Seviye Paket: Hedefe Doğru Yolculuk
                    </h3>
                    <p>
                      Temel Paketin Tüm İçeriği <br />
                      Aylık Detoks Programı
                      <br />
                      Haftalık Online Grup Seminerleri{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-pink">
                    <div className="feature-icon">
                      <i className="icon-honey"></i>
                    </div>
                    <h3 className="feature-title">
                      Premium Paket: Kişiye Özel Lüks Deneyim
                    </h3>
                    <p>
                      Orta Seviye Paketin Tüm İçeriği
                      <br />
                      Aylık Sporcu Beslenmesi Analizi
                      <br />
                      Telefonla İleri Düzey Takip ve Destek{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-orange">
                    <div className="feature-icon">
                      <i className="icon-chocolate"></i>
                    </div>
                    <h3 className="feature-title">
                      Elite Paket: Sağlığınıza Zirve Deneyimi!
                    </h3>
                    <p>
                      Kişiye Özel Beslenme ve Egzersiz Programı
                      <br />
                      Haftalık Birebir Danışmanlık
                      <br />
                      Meyve ve Sebze Detoksu
                      <br />
                      Premium Sağlık Kontrolleri{" "}
                    </p>
                  </div>
                </div>
              </div>

              <hr />

              <p>
                <h4>Neden Benimle Çalışmalısınız? </h4>
                Deneyimli Bir Profesyonele Güvenin: Obezite ve Metabolik
                Cerrahi'de klinik deneyimimle size en iyi hizmeti sunuyorum.
                Kişiye Özel Yaklaşım: Her birey benzersizdir, bu nedenle size
                özel bir beslenme planı oluşturuyorum. Takip ve Motivasyon:
                Yolculuğunuz boyunca sizi destekleyerek hedeflerinize ulaşmanıza
                yardımcı oluyorum. Haydi, sağlıklı bir yaşam için ilk adımı
                birlikte atalım! Detaylı bilgi ve randevu için bana{" "}
                <a href="/contact">iletişim bilgileri</a> sayfasındaki adresten
                ulaşabilirsiniz. <br/>Sağlıklı günler dilerim, <br/>Dyt. Billur Kuzudişli
              </p>
            </div>
          </div>
        </main>
        {/* <!-- .main-content --> */}

        <Footer />
      </div>

      <script src="assets/js/jquery-1.11.1.min.js"></script>
      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/app.js"></script>
    </Fragment>
  );
}

export default Offer;
