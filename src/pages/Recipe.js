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
                Cras sit amet odio enim condimentum pretium vitae nec enim in
                aliquet dolor proin semper vivamus
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <div class="recipes-list">
                <article class="recipe">
                  <figure class="recipe-image">
                    <img src="assets/dummy/food-1.jpg" alt="Food 1" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="assets/single.html">
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Autem aliquam minima ullam officiis eum facilis impedit
                      molestiae ducimus nam. Et, saepe commodi quisquam, porro
                      eaque eligendi neque voluptates numquam perspiciatis.
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
                    <img src="assets/dummy/food-2.jpg" alt="Food 2" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="assets/single.html">
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Temporibus a dolor ducimus error rerum, corporis nam,
                      perspiciatis molestiae illo, doloribus repellendus vitae.
                      Excepturi inventore est adipisci. Dignissimos amet unde,
                      consequatur.
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
                    <img src="assets/dummy/food-3.jpg" alt="Food 3" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="assets/single.html">
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Perspiciatis, ipsum sint omnis. Porro ea molestiae magni
                      necessitatibus ducimus quidem at, quibusdam odit quam,
                      doloribus temporibus sit, eum consectetur quos dolorem?
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
                    <img src="assets/dummy/food-4.jpg" alt="Food 4" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="assets/single.html">
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Commodi natus, recusandae, earum soluta esse iste ipsa
                      culpa assumenda. Sint quod fugiat, nihil totam vel debitis
                      nesciunt libero harum qui nulla.
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
                    <img src="assets/dummy/food-5.jpg" alt="Food 5" />
                  </figure>
                  <div class="recipe-detail">
                    <h2 class="recipe-title">
                      <a href="assets/single.html">
                        Duis pellentesque nulla eget vehicula porta
                      </a>
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Assumenda accusamus nisi quasi, minus praesentium culpa
                      eligendi in! Laborum cumque, ab autem sed maiores,
                      quisquam, ipsum soluta ipsa laboriosam dolores vel.
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
