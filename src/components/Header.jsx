import React from "react";
import MyNav from "./Mynav";
import dashboard from "../assets/images/png/img.png";
import message from "../assets/images/png/messages.png";
import totaltime from "../assets/images/png/totaltime.png";
import research from "../assets/images/png/card.png";
const Header = () => {
  return (
    <>
      <header className="bg_header z-1 d-flex flex-column min_vh_100 pb_200 pt-4 position-relative">
        <MyNav />
        <div
          className="d-flex align-items-center justify-content-center mt-5 pt-5 position-absolute w-100 fulldashboard
        "
        >
          <span className="position-relative">
            <img
              className="research position-absolute animate__fadeInUp"
              src={research}
              alt="research"
            />
            <img
              className="totaltime position-absolute animate__fadeInLeft"
              src={totaltime}
              alt="totaltime"
            />
            <img
              className="dashboard animate__fadeInDown"
              src={dashboard}
              alt="dashboard"
            />
            <img
              className="message position-absolute animate__fadeInRight"
              src={message}
              alt="message"
            />
          </span>
        </div>
        <main className="position-relative d-flex justify-content-center flex-column align-items-center">
          <h1 className="text-center ff_dm text-white fs_xxl fw-medium lh_120 mt-5 pt-lg-5 pt-sm-3 animate__fadeInLeft">
            A Digital Product Design Agency
          </h1>
          <p className="text-center ff_dm fs_md lh_170 op_08 animate__fadeInRight">
            We are Creative and Professional Digital Agency
          </p>
          <div className="d-flex align-items-center justify-content-center">
            <button className="nav_btn mt-sm-4 mt-3 animate__bounceIn">
              Get started
            </button>
          </div>
        </main>
      </header>
    </>
  );
};

export default Header;
