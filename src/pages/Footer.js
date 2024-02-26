import React, { Fragment } from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return <Fragment>
            <footer className="site-footer">
          <div className="container">
            <i className="icon-cupcake logo"></i>
            <nav className="footer-navigation">
            <Link to="/about">Hakkımda</Link>
            <Link to="/myoffer">Teklifler</Link>
            <Link to="/recipes">Tarifler</Link>
            <Link to="/contact">İletişim</Link>
            </nav>
            <div className="subscribe">
              <form action="/login">
                <input
                  type="text"
                  placeholder="Enter your email to join newsletter..."
                />
                <input type="submit" value="Kayıt Ol" />
              </form>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/dyt.billurkuzudisli/" className="twitter">
              <i id="social-in" class="fa fa-instagram fa"></i>
              </a>
              <a href="https://www.linkedin.com/in/billur-kuzudisli-ery%C4%B1lmaz-514274109/?originalSubdomain=tr" className="pinterest">
              <i className="fab fa-linkedin fa"></i>
              </a>
              <a href="https://www.salusmental.com/uzmanlarimiz/diyetisyen-billur-kuzudisli" className="facebook">
                <i className="fa fa-pencil"></i>
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
