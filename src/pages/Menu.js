import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Modal.css";

function Menu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  // dropdown'u aç/kapat fonksiyonu
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };
  return (
    <Fragment>
      <header className="site-header">
        <div className="container">
          <a href="/" id="branding" className="pull-left">
            <i className="icon-cupcake logo"></i>
            <h1 className="site-title">
              <Link to="/">Dyt. Billur Kuzudişli</Link>
            </h1>
          </a>
          {/* <!-- Default snippet for navigation --> */}
          <div className="main-navigation pull-right">
            <button type="button" className="menu-toggle">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/about">Hakkımda</Link>
              </li>
              <li className="menu-item">
                <Link to="/myoffer">Teklifler</Link>
              </li>
              <li className="menu-item">
                <Link to="/recipes">Tarifler</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">İletişim</Link>
              </li>
              <li className="menu-item">
                {/* Dropdown Menü */}
                <div className="dropdown">
                  <span>
                    <Link to="/">Bloglar</Link>
                  </span>
                  <div className="dropdown-content">
                    <div className="row">
                      {" "}
                      <Link to="/pregnantblog">Hamilelik ve Emzirme Döneminde Sağlıklı Beslenme</Link>
                      <Link to="/weightblog">Kilo Alma ve Kilo Verme</Link>
                      <Link to="/autoimmuneblog">Otoimmün Hastalıklarda Beslenme</Link>
                      <Link to="/childhealthblog">Çocuk ve Ergen Beslenmesi</Link>
                    </div>
                  </div>
                </div>
                {/* Dropdown Menü */}
              </li>
              <li className="menu-item">
                <Link to="/login">Kayıt Ol | Giriş Yap</Link>
              </li>
              <li className="menu-item">
                <Link to="/adminlogin">Admin</Link>
              </li>
            </ul>
            {/* <!-- .menu --> */}
          </div>
          {/* <!-- .main-navigation --> */}

          <div className="mobile-navigation"></div>
        </div>
      </header>
      {/* <!-- .site-header --> */}
    </Fragment>
  );
}
export default Menu;
