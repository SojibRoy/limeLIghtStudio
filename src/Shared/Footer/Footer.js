import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue pt-4 ">
    <div className="container-fluid text-center text-md-left">
      <div className="row bg-light pt-4">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase fs-3">Lime-Light</h5>
          
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 col-lg-2 mb-md-0 mb-3 text-start">
          <h5 className="text-uppercase">Lime-Light</h5>
          <ul className="list-unstyled">
            <li>
              <a className="text-decoration-none" href="#!">Resources</a>
            </li>
            <li>
              <a className="text-decoration-none" href="#!">About Us</a>
            </li>
            <li>
              <a className="text-decoration-none" href="#!">Contact</a>
            </li>
            <li>
              <a className="text-decoration-none" href="#!">Blog</a>
            </li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 col-lg-4 mb-3 text-start ">
          <h5 className="text-uppercase ">Help</h5>
          <ul className="list-unstyled ">
            <li>
              <a className="text-decoration-none" href="#!">Support</a>
            </li>
            <li>
              <a className="text-decoration-none" href="#!">Sign Up</a>
            </li>
            <li>
              <a className="text-decoration-none" href="#!">Sign In</a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2022 Copyright:
          <a className="text-decoration-none" href="#!"> lime-light.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
