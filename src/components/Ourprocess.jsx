import React from "react";
import process1 from "../assets/images/png/process1.png";
import process2 from "../assets/images/png/process2.png";
import process3 from "../assets/images/png/process3.png";
import buisnessadult from "../assets/images/svg/buisnessaudit.svg";
import data from "../assets/images/svg/data.svg";
import result from "../assets/images/svg/result.svg";
const Ourprocess = () => {
  return (
    <>
      <section className="bg_process py_193">
        <div className="my_container">
          <p
            className="op_05 text-center ff_dm fw-bold ls_18 ff_dm fs_xxsm lh_122"
            data-aos="zoom-out-down"
            data-aos-duration="1500"
          >
            HOW IT WORKS
          </p>
          <h2
            className="text-center lh_122 fs_xl ff_dm fw-medium text-white"
            data-aos="zoom-out"
            data-aos-duration="1700"
          >
            Our Process
          </h2>
          <p
            className="text-center mw_718 fs_md text-white ff_dm mx-auto pt-3 pb-3 lh_170 fw-normal"
            data-aos="zoom-out"
            data-aos-duration="1900"
          >
            We know the best solution for all of your business ideas and we can
            help you solve all business problems
          </p>
          <div
            className="d-flex flex-lg-row flex-column align-items-center mb-5 process_card px-lg-4 px-md-3 py_30"
            data-aos="zoom-out"
            data-aos-duration="1900"
          >
            <div className="w-lg-50">
              <img className="process1" src={process1} alt="" />
            </div>
            <div className="d-flex flex-column ps-xl-5 ps-lg-4 px-3 align-items-start">
              <img src={buisnessadult} alt="buisnessadult" />
              <h5 className="clr_grey ff_dm fw-bold fs_lg lh_136 ps-3">
                Business Audit
              </h5>
              <p className="ff_dm fs_sm fw-normal lh_124 ps-3">
                An audit examines your business's financial records to verify
                they are accurate. This is done through a systematic review of
                your transactions.
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-lg-row flex-column align-items-center mb-5 py-lg-5 py-3 process_card px-lg-4 px-md-3 "
            data-aos="zoom-out"
            data-aos-duration="2100"
          >
            <div className="w-lg-50">
              <img className="process2" src={process2} alt="procedss2" />
            </div>
            <div className="d-flex flex-column ps-xl-5 ps-lg-4 px-3 align-items-start">
              <img src={data} alt="buisnessadult" />
              <h5 className="clr_grey ff_dm fw-bold fs_lg lh_136 ps-3">
                Data tracking
              </h5>
              <p className="ff_dm fs_sm fw-normal lh_124 ps-3">
                The hardware and software, which when used together allows you
                to know where something is at any point in time
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-lg-row flex-column align-items-center process_card px-lg-4 px-md-3 py-3 py_30"
            data-aos="zoom-out"
            data-aos-duration="2300"
          >
            <div className="w-lg-50 my-1">
              <img className="process3" src={process3} alt="process3" />
            </div>
            <div className="d-flex flex-column ps-xl-5 ps-lg-4 px-3 align-items-start">
              <img src={result} alt="buisnessadult" />
              <h5 className="clr_grey ff_dm fw-bold fs_lg lh_136 ps-3">
                Results
              </h5>
              <p className="ff_dm fs_sm fw-normal lh_124 ps-3">
                An audit examines your business's financial records to verify
                they are accurate. This is done through a systematic review of
                your transactions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ourprocess;
