import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return <Fragment>
            <footer className="site-footer">
          <div className="container">
            <i className="icon-cupcake logo"></i>
            <nav className="footer-navigation">
            <Link to="/about">About me</Link>
            <Link to="/myoffer">My offer</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/contact">Contact</Link>
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
