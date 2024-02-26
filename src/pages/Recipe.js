import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Recipe() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />
        <main class="main-content">
          <div class="content">
            <div class="container">
              <h2 class="entry-title">
                Sağlıklı Yaşamın Lezzetli Yolu: Diyetisyen Tarifleriyle Mutlu ve
                Dengeli Beslenme!
              </h2>
              <p>
                Vücudunuza İyi Gelen Her Lokma, Bir Diyetisyenin Ellerinden!
                Sağlıklı Yaşamın Kapılarını Açın, Lezzet Dolu Tariflerle
                Tanışın.{" "}
              </p>

              <div class="recipes-list">
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/muzlu_smoothie.png" alt="Food 1" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="https://www.instagram.com/p/B-RqQNcF2H_/">
                        Böğürtlenli Muzlu Smoothie
                      </a>
                    </h2>
                    <p>
                      Kırmızı meyvelerin antioksidan etkisinden faydalanmayı
                      öğrenmemiz lazım Türkiyee! Tüm büyük marketlerde
                      kolaylıkla bulabileceğiniz bu meyveler ile renkli, tadı
                      güzel ve sağlıklı içecekler yapabiliriz. Her gün elma,
                      armut, portakal tüketiyoruz, bu meyvelerin başı kel mi
                      😔😔 Madem evdeyiz ALIŞKANLIKLARI BİRAZ DEĞİŞTİRELİM
                      💥💥💥 Malzemeler 🔹1 su bardağına yakın böğürtlen 🔹Yarım
                      muz 🔹1 bardak süt 🔹1 çay kaşığı bal, zencefil, zerdeçal
                      karışımı Yapılışı ✔️Hepsini blenderdan geçiriyoruuuz,
                      içimiz yandıysa soğuk soğuk içmek istiyorsak 2-3 kalıpta
                      buz ekliyoruz 🥤🥤🥤 Not: Soğuk içeceklerin botoks
                      etkisini arttırdığını biliyor muyduuuk??? 😏😏😏
                    </p>
                    <div class="recipe-meta">
                      <span class="time">
                        <img src="assets/images/icon-time.png" alt="" /> 10 min
                      </span>
                      <span class="calorie">
                        <img src="assets/images/icon-pie-chart.png" alt="" />{" "}
                        320 kcal
                      </span>
                    </div>
                  </div>
                </article>
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/börek.png" alt="Food 2" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="https://www.instagram.com/p/CJRKsXjAg8u/?img_index=1">
                        Pazılı Havuçlu Börek
                      </a>
                    </h2>
                    <p>
                      Pazılı Havuçlu Börekcim 500 gr ince kıyılmış pırasa Ve 2
                      tane büyük rendelenmiş havucu soteledim. Artık pişmeye
                      yaklaşınca onları kaba alıp üzerine 3 yumurta ve 2-3 yk
                      mısır/nohut unu ve kabartma tozu ekledim. Borcama alınca
                      çörek otu serpiştirdim ve hazır 🕺 Daha yayvan bir borcama
                      koyarsanız daha çıtır çıtır olur 🧡
                    </p>
                    <div class="recipe-meta">
                      <span class="time">
                        <img src="assets/images/icon-time.png" alt="" /> 30 min
                      </span>
                      <span class="calorie">
                        <img src="assets/images/icon-pie-chart.png" alt="" />{" "}
                        320 kcal
                      </span>
                    </div>
                  </div>
                </article>
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/karnabahar.png" alt="Food 3" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="https://www.instagram.com/p/CLW0k7mAZ5D/">
                        Soslu Karnabahar
                      </a>
                    </h2>
                    <p>
                      Karnabahar sevmeyenler için gelsin :) -1 orta boy
                      Karnabahar -1 şişe soda -2 yumurta -3 yemek kaşığı Mısır
                      unu -Yarım çay bardağı zeytinyağı -2 diş sarımsak -Tuz,
                      pul biber, karabiber, zencefil, zerdeçal, kimyon, kekik,
                      toz biber YAPILIŞI Karnabaharı güzelce temizleyip
                      parçalara ayıralım ama küçük küçük Ardından sosunu
                      hazırlayalım. Bir kabın içerisine mısır ununu, sarımsağı,
                      sıvı yağı, tuzu, pul biberi, karabiberi, zencefili,
                      zerdeçalı, kimyonu, kekiki, toz biberi koyalım. Üzerine
                      yumurtayı ilave edelim ve güzelce karıştıralım. Daha sonra
                      sodayı ilave edelim ve karıştırmaya devam edelim.
                      Hazırladığımız sosa karnabaharları batıralım ve yağlı
                      kağıt serdiğimiz tepsiye yerleştirelim. 180 derece fırında
                      kontrollü bir şekilde pişirelim. Not: Bu sosu isterseniz
                      tavuğa da bulayabilirsiniz. Yanına da mor soğan, havuç,
                      kereviz, patates, sarımsak vs vs 😏
                    </p>
                    <div class="recipe-meta">
                      <span class="time">
                        <img src="assets/images/icon-time.png" alt="" /> 40 min
                      </span>
                      <span class="calorie">
                        <img src="assets/images/icon-pie-chart.png" alt="" />{" "}
                        320 kcal
                      </span>
                      <span class="comment">
                        <img src="assets/images/icon-comment.png" alt="" /> 16
                        comments
                      </span>
                    </div>
                  </div>
                </article>
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/focaccia.png" alt="Food 4" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="https://www.instagram.com/p/CKtqYBxgTHr/?img_index=1">
                        Focaccia
                      </a>
                    </h2>
                    <p>
                      2 yumurta, 1 su bardağı süt, yarım su bardağı zeytinyağını
                      çırpıyorsunuz, içine 1.5 su bardağı nohut unu, yarım su
                      bardağı tam buğday unu, 1 yemek kaşığı sirke, 1 tatlı
                      kaşığı şeker, 1 çay kaşığı tuz, 1 paket kabartma tozu inu
                      koyup karıştırın. İçine istediğiniz kadar zeytin ve ceviz
                      koyun. Kabı yağlayıp fırına atın ve hafif pişince üst
                      malzemeleri de ekleyin. Ben kekik de koydum :) 20 25 dk
                      pişiyor :)😊 Her zamanki nohut unlu ekmeğime ceviz, zeytin
                      ekledim. Üstüne de ek olarak kekik ve domates koydum.
                    </p>
                    <div class="recipe-meta">
                      <span class="time">
                        <img src="assets/images/icon-time.png" alt="" /> 40 min
                      </span>
                      <span class="calorie">
                        <img src="assets/images/icon-pie-chart.png" alt="" />{" "}
                        320 kcal
                      </span>
                      <span class="comment">
                        <img src="assets/images/icon-comment.png" alt="" /> 15
                        comments
                      </span>
                    </div>
                  </div>
                </article>
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/pancar.png" alt="Food 5" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="https://www.instagram.com/p/COVUF0JgKOi/?img_index=1">
                        Pancar Borani
                      </a>
                    </h2>
                    <p>
                      😎 2 orta boy soğan ve pancarı soy, küp küp doğra, 4-5
                      sarımsağı ince ince kes ekle ve hafif zeytinyağı ile su
                      koy tencereye, kısık ateşte kapağı kapalı. Pişer gibi
                      olunca içine kuzu kulağı, nane ve 3 yk ıslanmış pirinç,
                      tuz, karabiber attım , biraz daha su ve yine kapağı
                      kapadım. Pişince baharat ve tamamdır :)) Benim
                      baharatlarım: zencefil, sumak, tuz, karabiber ve biraz
                      limon suyu Tarifi @fitmuhendisce nin harika kitabında
                      gördüm, sağlıklı ama sıkıcı olmayan tarifler için
                      mükemmel🌸🌸🌸
                    </p>
                    <div class="recipe-meta">
                      <span class="time">
                        <img src="assets/images/icon-time.png" alt="" /> 20 min
                      </span>
                      <span class="calorie">
                        <img src="assets/images/icon-pie-chart.png" alt="" />{" "}
                        320 kcal
                      </span>
                      <span class="comment">
                        <img src="assets/images/icon-comment.png" alt="" /> 5
                        comments
                      </span>
                    </div>
                  </div>
                </article>
              </div>
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

export default Recipe;
