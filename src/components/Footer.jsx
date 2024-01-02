import React from "react";
import footerlogo from "../assets/images/svg/logo.svg";
import facebook from "../assets/images/svg/Facebook.svg";
import instagram from "../assets/images/svg/Instagram.svg";
import Twitter from "../assets/images/svg/Twitter.svg";

const Footer = () => {
  return (
    <>
      <footer className="bg_footer py_84">
        <div className="my_container">
          <div
            className="d-flex flex-column flex-lg-row gap-4 gap-lg-0 align-items-center  justify-content-between"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
          >
            <img className="c_pointer" src={footerlogo} alt="footerlogo" />
            <div
              className="d-flex flex-column flex-md-row align-items-center  justify-content-between  px-lg-3 px-0"
              data-aos="fade-right"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <div className="d-flex flex_column gap-4 gap-md-0 mb-4 mb-md-0 align-items-center">
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Home
                </a>
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Your benefits
                </a>
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Our process
                </a>
              </div>
              <div className="d-flex flex_column gap-4 gap-md-0 align-items-center">
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Our works
                </a>
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Testimonials
                </a>
                <a className="ff_dm fs_sm fw-medium opacity_80 px-xl-3 px-2 bold_hover transition_300 c_pointer">
                  Start a project
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 mt-lg-0 mt-4">
              <img
                className="c_pointer sm_icons transition_300"
                src={facebook}
                alt="facbook"
              />
              <img
                className="c_pointer sm_icons transition_300"
                src={instagram}
                alt="instagram"
              />
              <img
                className="c_pointer sm_icons transition_300"
                src={Twitter}
                alt="twitter"
              />
            </div>
          </div>
          <span className="footer_line my-4"></span>
          <div className="d-flex align-items-center justify-content-between pt-1">
            <p className="fs_sm opacity_80 ff_dm mb-0">© 2021 Company</p>
            <div className="d-sm-flex align-items-center">
              <p className="fs_sm opacity_80 ff_dm pe-4 mb-0">Privacy policy</p>
              <p className="fs_sm opacity_80 ff_dm mb-0">Term of service</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
