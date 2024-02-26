import React, { Fragment, useState } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Index() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />
        <div className="hero">
          <div className="container">
            <i className="icon-cupcake logo"></i>
            <h1 className="site-title">Dyt. Billur Kuzudişli</h1>
            <small className="site-description">Psikolog/Diyetisyen</small>
          </div>
        </div>
        <main className="main-content">
          <div className="fullwidth-block cooking-section category-block">
            <div className="container">
              <figure>
                <img src="assets/dummy/hamile.png" alt="cooking" />
              </figure>
              <div className="category-content">
                <h1 className="category-title">
                  {" "}
                  Hamilelik ve Emzirme Döneminde Sağlıklı Beslenme: Diyetisyen
                  Tavsiyeleri
                </h1>
                <p>
                  Hamilelik ve emzirme süreçleri, annelerin ve bebeklerin
                  sağlığı için kritik öneme sahiptir. Bu dönemde doğru beslenme,
                  hem anne hem de bebek için optimal gelişim ve sağlık açısından
                  hayati bir rol oynar. Bu yazıda, hamilelik ve emzirme
                  dönemlerinde sağlıklı beslenme konusunda uzman diyetisyenlerin
                  önerilerini bulacaksınız.
                </p>
                <a href="/pregnantblog" className="button">
                  Devamı
                </a>
              </div>
              {/* <!-- .category-content --> */}
            </div>
          </div>
          {/* <!-- .cooking-section --> */}
          <div className="fullwidth-block restaurant-section category-block">
            <div className="container">
              <figure>
                <img src="assets/dummy/weight.png" alt="restaurant" />
              </figure>
              <div className="category-content">
                <h1 className="category-title">
                  Sağlıklı Bir Yaşamın Anahtarı: Kilo Alma ve Kilo Verme
                  Hakkında Bilinmesi Gerekenler
                </h1>
                <p>
                  Sağlıklı bir yaşam tarzını benimsemek, vücudumuzu doğru
                  beslemek ve ihtiyacı olan aktiviteyi sağlamak, uzun vadeli
                  sağlık hedeflerine ulaşmamızı destekleyen temel unsurlardan
                  biridir. Bu yazıda, kilo alma ve kilo verme konularında
                  sağlıklı bir denge kurmanın önemini anlatacağım. Sağlıklı bir
                  şekilde kilo almak ve kilo vermek, sadece dış görünüşümüzü
                  değil, aynı zamanda genel sağlığımızı da olumlu yönde etkiler.
                  İşte bu dengeyi korumanın yolları ve temel prensipleri...
                </p>
                <a href="/weightblog" className="button">
                  Devamı
                </a>
              </div>
              {/* <!-- .category-content --> */}
            </div>
          </div>
          {/* <!-- .restaurant-section --> */}
          <div className="fullwidth-block fruits-section category-block">
            <div className="container">
              <figure>
                <img src="assets/dummy/immunity.png" alt="fruits" />
              </figure>
              <div className="category-content">
                <h1 className="category-title">
                  Otoimmün Hastalıklarda Beslenme: Vücudumuza Sevgiyle Yaklaşmak
                </h1>
                <p>
                  Günümüzde otoimmün hastalıklar giderek artan bir sorun haline
                  gelmiştir. Bağışıklık sistemimizin yanlışlıkla kendi
                  hücrelerimize saldırması sonucu ortaya çıkan bu hastalıklar,
                  birçok kişinin yaşam kalitesini etkileyebilir. Ancak,
                  unutulmamalıdır ki beslenme, otoimmün hastalıklarla başa
                  çıkmada önemli bir rol oynayabilir. Bu yazıda, otoimmün
                  hastalıklarla yaşayan bireyler için uygun beslenme
                  stratejilerini keşfedeceğiz. Sağlıklı bir yaşamın anahtarı
                  olan beslenme, otoimmün hastalıklarla mücadelede bize nasıl
                  destek olabilir, hep birlikte inceleyelim...
                </p>
                <a href="/autoimmuneblog" className="button">
                  Devamı
                </a>
              </div>
              {/* <!-- .category-content --> */}
            </div>
          </div>
          {/* <!-- .fruits-section --> */}
          <div className="fullwidth-block vegetables-section category-block">
            <div className="container">
              <figure>
                <img src="assets/dummy/mealkids.png" alt="vegetables" />
              </figure>
              <div className="category-content">
                <h1 className="category-title">
                  Sağlıklı Gelecek İçin Temel Taş: Çocuk ve Ergen Beslenmesi
                </h1>
                <p>
                  Çocuklar ve ergenler, enerji dolu bir yaşamın temel
                  taşlarıdır. Bu kritik dönemde sağlıklı beslenme, hem fiziksel
                  hem de zihinsel gelişimleri için hayati öneme sahiptir. Ancak,
                  hızla değişen beslenme alışkanlıkları, teknolojinin etkisi ve
                  yoğun günlük yaşam, genç nesillerin sağlıklı bir beslenme
                  rutini oluşturmasını zorlaştırabilir. Bu yazıda, çocuk ve
                  ergen beslenmesinin önemini vurgulayacak ve bu yaş grupları
                  için sağlıklı beslenme alışkanlıkları kazanmanın yollarını ele
                  alacağız. Haydi, çocuklarımızın ve gençlerimizin sağlıklı bir
                  geleceği için beslenme ile ilgili temel bilgileri birlikte
                  keşfedelim.
                </p>
                <a href="/childhealthblog" className="button">
                  Devamı
                </a>
              </div>
              {/* <!-- .category-content --> */}
            </div>
          </div>
          {/* <!-- .vegetables-section --> */}
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
export default Index;
