import React from "react";
import "./Footer.css";
import logo2 from "../pic/logo2.png";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3">
                  <p>Software</p>
                  <br />
                  <p>Features overview</p>
                  <p>Solutions</p>
                  <p>Free time tracking app</p>
                  <p>Integrations</p>
                  <p>Download app</p>
                  <p>Demo</p>
                  <p>Time tracking API</p>
                  <p>Request a feature</p>
                </div>
                <div className="col-md-3">
                  <p>Learning center</p>
                  <br />
                  <p>Time tracking resources</p>
                  <p>Workforce management
                  resources</p>
                  <p>Business resources</p>
                  <p>Blog</p>
                </div>
                <div className="col-md-3">
                <p>More</p>
                  <br />
                  <p>Help Center</p>
                  <p>FAQ</p>
                  <p>Status</p>
                </div>
                <div className="col-md-3">
                  <p>Company</p>
                  <br />
                  <p>About us</p>
                  <p>Contact Us</p>
                  <p>Reviews</p>
                  <p>Customer stories</p>
                  <p>Careers</p>
                  <p>Press</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <h3>Ready to get started?</h3>
              <input type="button" className="signin_btn mt-2" value="Sign me up"/>
              <hr className="my-4"/>
              <p className="my-4">Follow us</p>
              <h4>
              <i className="fa-brands fa-square-facebook mx-1"></i>
              <i className="fa-brands fa-linkedin-in mx-1"></i>
              <i className="fa-brands fa-twitter mx-1"></i>
              <i className="fa-brands fa-youtube mx-1"></i>
              <i className="fa-brands fa-instagram mx-1"></i>
              </h4>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-8">
              <div className="row">
              <div className="col-md-3">
                  <img  src={logo2} alt="" />
              </div>
              <div className="col-md-9">
                <p>Copyright © 2024 Netsoft Holdings, LLC
                11650 Olio Road, Suite #1000 - 193 Fishers, IN 46037</p>
              </div>
              </div>
            </div>

            <div className="col-md-4">
              <p>Terms &nbsp;&nbsp;&nbsp;  Privacy &nbsp;&nbsp;&nbsp;  GDPR compliance</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
