import React from "react";
import helpleft from "../assets/images/png/helpleft.png";
import helpright from "../assets/images/png/shape.png";
import img5 from "../assets/images/svg/buisness.svg";
import img2 from "../assets/images/svg/drivemorescale.svg";
import img1 from "../assets/images/svg/grow.svg";
import img3 from "../assets/images/svg/handelexpert.svg";
import img4 from "../assets/images/svg/uxresearch.svg";
import img6 from "../assets/images/svg/datatracking.svg";
import { Row, Col } from "react-bootstrap";

const Help = () => {
  return (
    <>
      <section className="py_185 position-relative z-0 bg_brand">
        <img
          className="helpleft position-absolute end-0 w_lg_100 z-0"
          src={helpleft}
          alt="helpleft"
        />
        <img
          className="position-absolute w_lg_100 top_50"
          src={helpright}
          alt="helpright z-0"
        />
        <div className="my_container">
          <p
            className="text-start text-uppercase ls_18 fs_xxsm fw-bold clr_lightgreen"
            data-aos="fade-right"
          >
            features
          </p>
          <h2
            className="text-start fs_xl ff_dm fw-medium mw_528 mt-2 lh_122 clr_darkgrey position-relative z-2"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            We are here to help you with
          </h2>
          <Row className="position-relative z-1 mt-4">
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="2000"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img1} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  Grow your business
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 pt-2 mb-lg-5 mb-3">
                  <span className="fw-bold">The magic wand </span> for success
                  is in figuring out how to bring in the profits and ensure the
                  capacity needed to sustain that growth for posterity.
                </p>
              </div>
            </Col>
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="2200"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img2} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  Drive more sales
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 mb-lg-5 mb-3 pt-2">
                  A potential customer, once lost, is hard to retain back. But
                  <span className="fw-bold"> keeping some critical </span>
                  factors in mind, we can, for sure, use these loyalty programs
                  as customer retention tools.
                </p>
              </div>
            </Col>
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="2400"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img3} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  Handle by Expert
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 pt-2 mb-lg-5 mb-3 ">
                  We know how we candevelop deep, trust-based relationships with
                  our clients, and work together more collaboratively
                </p>
              </div>
            </Col>
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="2600"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img4} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  UX Research
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 pt-2 mb-lg-5 mb-3 ">
                  <span className="fw-bold">The magic wand </span> for success
                  is in figuring out how to bring in the profits and ensure the
                  capacity needed to sustain that growth for posterity.
                </p>
              </div>
            </Col>
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="2800"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img5} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  Business Audit
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 pt-2 mb-lg-5 mb-3 ">
                  <span className="fw-bold">The magic wand </span> for success
                  is in figuring out how to bring in the profits and ensure the
                  capacity needed to sustain that growth for posterity.
                </p>
              </div>
            </Col>
            <Col
              className="pb-4"
              md={4}
              sm={6}
              data-aos="zoom-out-up"
              data-aos-duration="3000"
            >
              <div className="h-100 pt-lg-5 pt-3 d-flex help_card  align-items-start flex-column pe-2 pe-xl-0 ">
                <img className="ms-3" src={img6} alt="img" />
                <h4 className="ff_dm fw-bold fs_lg clr_darkgrey ps-lg-4 ps-2 ms-3">
                  Data tracking
                </h4>
                <p className="ff_dm fw-normal fs_sm clr_lightgrey ps-lg-4 ps-2 lh_150 ms-3 pb-1 pt-2 mb-lg-5 mb-3 ">
                  <span className="fw-bold">The magic wand </span> for success
                  is in figuring out how to bring in the profits and ensure the
                  capacity needed to sustain that growth for posterity.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Help;
