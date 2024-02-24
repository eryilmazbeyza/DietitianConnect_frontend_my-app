import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import AdminFooter from "./AdminFooter";

function Admin() {
  return (
    <Fragment>
      <AdminMenu />
      <div className="hero">
          <div className="container">
            <i className="icon-cupcake logo"></i>
            <h1 className="site-title">Admin Page</h1>
          </div>
        </div>
        <main className="main-content">
          <div className="fullwidth-block cooking-section category-block">
            <div className="container">

              </div>
              {/* <!-- .category-content --> */}
            </div>
          {/* <!-- .vegetables-section --> */}
        </main>
        {/* <!-- .main-content --> */}
        <AdminFooter/>
    </Fragment>
  );
}

export default Admin;
