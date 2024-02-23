import React, { Fragment } from "react";
import Menu from "./Menu";
import Footer from "./Footer";

function Offer() {
  return (
    <Fragment>
      <div id="site-content">
        <Menu />

        <main className="main-content">
          <div className="content">
            <div className="container">
              <h2 className="entry-title">
                Accusamus iusto odio dignissimos ducimus qui blanditiis
                praesentium deleniti corrupti quos dolores
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>

              <hr />

              <div className="row">
                <div className="col-md-3">
                  <div className="feature color-purple">
                    <div className="feature-icon">
                      <i className="icon-bowl"></i>
                    </div>
                    <h3 className="feature-title">Lorem ipsum</h3>
                    <p>
                      Pellentesque erat erat mattis feugiat pharetra, viverra
                      nec mauris. Nullam sed risus aliquam congue nunc ac
                      convallis mi.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-green">
                    <div className="feature-icon">
                      <i className="icon-oil"></i>
                    </div>
                    <h3 className="feature-title">Tempora incidunt</h3>
                    <p>
                      Pellentesque erat erat mattis feugiat pharetra, viverra
                      nec mauris. Nullam sed risus aliquam congue nunc ac
                      convallis mi.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-pink">
                    <div className="feature-icon">
                      <i className="icon-honey"></i>
                    </div>
                    <h3 className="feature-title">Cupidatat proident</h3>
                    <p>
                      Pellentesque erat erat mattis feugiat pharetra, viverra
                      nec mauris. Nullam sed risus aliquam congue nunc ac
                      convallis mi.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="feature color-orange">
                    <div className="feature-icon">
                      <i className="icon-chocolate"></i>
                    </div>
                    <h3 className="feature-title">Aliquam quaerat</h3>
                    <p>
                      Pellentesque erat erat mattis feugiat pharetra, viverra
                      nec mauris. Nullam sed risus aliquam congue nunc ac
                      convallis mi.{" "}
                    </p>
                  </div>
                </div>
              </div>

              <hr />

              <p>
                Pellentesque erat erat, mattis non feugiat pharetra, viverra nec
                mauris. Nullam sed risus aliquam, congue nunc ac, convallis mi.{" "}
                <a href="assets/#">
                  Cras pellentesque sit amet urna fermentum ornare
                </a>
                . Sed in metus justo. Cras sit amet odio eu enim condimentum
                pretium vitae nec enim. In aliquet dolor nisl. Proin semper
                turpis nec posuere consectetur. Vivamus tristique rutrum quam,
                eu mattis elit semper eget. Sed ultrices, tellus dapibus
                consectetur porttitor, dui sapien mattis odio, vel imperdiet
                ipsum risus at risus. Mauris auctor tortor id sollicitudin
                tincidunt. Integer magna leo, sagittis a congue nec, viverra non
                mi. Proin dapibus pharetra tristique. Aliquam id lorem metus.
                Vivamus elit turpis, venenatis eu luctus quis, suscipit eget
                urna.
              </p>
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

export default Offer;
