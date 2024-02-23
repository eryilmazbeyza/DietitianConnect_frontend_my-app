import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

function Menu(){
   return(
   <Fragment>
        <header className="site-header">
          <div className="container">
            <a href="/" id="branding" className="pull-left">
              <i className="icon-cupcake logo"></i>
              <h1 className="site-title">
                <Link to="/">Name Surname</Link>
            </h1>
            </a>
            {/* <!-- Default snippet for navigation --> */}
            <div className="main-navigation pull-right">
              <button type="button" className="menu-toggle">
                <i className="fa fa-bars"></i>
              </button>
              <ul className="menu">
                <li className="menu-item">
                <Link to="/about">About me</Link>
                </li>
                <li className="menu-item">
                <Link to="/myoffer">My offer</Link>
                </li>
                <li className="menu-item">
                <Link to="/recipes">Recipes</Link>
                </li>
                <li className="menu-item">
                <Link to="/contact">Contact</Link>
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
    ) 
}
export default Menu;