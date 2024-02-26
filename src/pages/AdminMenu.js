import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function AdminMenu() {
  return (
    <Fragment>
      <header className="site-header">
        <div className="container">
          <a href="/admin" id="branding" className="pull-left">
            <i className="icon-cupcake logo"></i>
            <h1 className="site-title">
              <Link to="/admin">Dyt. Billur Kuzudişli</Link>
            </h1>
          </a>
          {/* <!-- Default snippet for navigation --> */}

          <div className="main-navigation pull-right">
            <button type="button" className="menu-toggle">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item">
                <Link to="/dietitiancrud">DietitianCRUD</Link>
              </li>
              <li className="menu-item">
                <Link to="/dietplancrud">DietPlanCRUD</Link>
              </li>
              <li className="menu-item">
                <Link to="/articlecrud">ArticleCRUD</Link>
              </li>
              <li className="menu-item">
                <Link to="/mealTrackingcrud">MealTrackingCRUD</Link>
              </li>
              <li className="menu-item">
                <Link to="/usercrud">UserCRUD</Link>
              </li>
              <li className="menu-item">
                <Link to="/admincrud">AdminCRUD</Link>
              </li>
              <li className="menu-item user-page">
                <Link to="/">User Page</Link>
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
export default AdminMenu;
