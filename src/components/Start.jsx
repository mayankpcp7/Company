import React from "react";
import { Row, Col } from "react-bootstrap";
import start from "../assets/images/png/startworking.png";
const Start = () => {
  return (
    <>
      <section className="bg_start py_123">
        <div className="my_container">
          <Row className="align-items-center flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <p
                className="text-lg-start text-center lh_122 fw-bold fs_xxsm mt-4 mt-lg-0 ls_18 ff_dm op_05 text-uppercase mb-0"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                start with us
              </p>
              <h2
                className="text-lg-start text-center ff_dm fw-medium py-lg-4 py-3  fs_xl text-white mw_414 mb-0"
                data-aos="fade-right"
                data-aos-offset="400"
                data-aos-easing="ease-in-sine"
              >
                Start working faster today
              </h2>
              <p
                className="text-lg-start text-center lh_170 fw-normal fs_md ff_dm mw_408 text-white"
                data-aos="fade-right"
                data-aos-offset="500"
                data-aos-easing="ease-in-sine"
              >
                We know the best solution for all of your business ideas and we
                can help you solve all business problems
              </p>
              <div
                className="d-flex align-items-center justify-content-lg-start justify-content-center"
                data-aos="fade-right"
                data-aos-offset="600"
                data-aos-easing="ease-in-sine"
              >
                <button className="nav_btn mt-3 transition_300">Get started</button>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className="d-flex align-items-center justify-content-center mb-4 mb-lg-0"
                data-aos="fade-left"
                data-aos-offset="700"
                data-aos-easing="ease-in-sine"
              >
                <img
                  className="w-100 mw_500 mx-auto"
                  src={start}
                  alt="startworking"
                />
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Start;
