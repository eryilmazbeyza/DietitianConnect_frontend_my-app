import React, { Fragment } from "react";

function Footer() {
  return <Fragment>
            <footer className="site-footer">
          <div className="container">
            <i className="icon-cupcake logo"></i>
            <nav className="footer-navigation">
              <a href="assets/about.html">About me</a>
              <a href="assets/offer.html">My offer</a>
              <a href="assets/recipe.html">Recipes</a>
              <a href="assets/contact.html">Contact</a>
            </nav>
            <div className="subscribe">
              <form action="#">
                <input
                  type="text"
                  placeholder="Enter your email to join newsletter..."
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="social-links">
              <a href="assets/#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="assets/#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="assets/#" className="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="assets/#" className="pinterest">
                <i className="fa fa-pinterest"></i>
              </a>
            </div>
            <div className="colophon">
              <p>
                Copyright 2014 Company name. Designed by Themezy. All right
                reserved
              </p>
            </div>
          </div>
        </footer>
  </Fragment>;
}

export default Footer;
