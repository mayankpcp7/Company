import { useState } from "react";
import { Nav } from "react-bootstrap";
import navlogo from "../assets/images/png/navlogo.png";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const MyNav = () => {
  const [show, setshow] = useState(true);
  function showNav() {
    setshow(!show);
  }
  if (!show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <>
        <Nav className="pt-2 px-xl-5 px-2 mx-sm-2 mb-2">
          <div className=" container-fluid d-flex justify-content-between align-items-center">
            <div className="logo c_pointer">
              <img src={navlogo} alt="logo" className="navlogo" />
            </div>
            <ul className="d-xxl-flex mb-0 d-none d-block align-items-center list-unstyled">
              <li>
                <a className='nav_a c_pointer'>Home</a>
              </li>
              <li>
                <a className='nav_a c_pointer'>Your benefits</a>
              </li>
              <li>
                <a className='nav_a c_pointer'>Our process</a>
              </li>
              <li>
                <a className='nav_a c_pointer'>Our works</a>
              </li>
              <li>
                <a className='nav_a c_pointer'>Testimonials</a>
              </li>
              <li>
                <a className='nav_a c_pointer'>Start a project</a>
              </li>
            </ul>
            <span className="d-none d-xxl-inline-block">
              <button className="nav_btn">Get started</button>
            </span>

            <div
              className="d-flex justify-content-between flex-column d-xxl-none menu_box z_index_100 position-relative z_50"
              onClick={showNav}
            >
              <h2 className="text-white fs_2xl z_50">
                {show ? <HiMenuAlt1 /> : <AiOutlineClose />}
              </h2>
            </div>
            <ul
              className={`d-flex bg_blue gap-4 mb-0 sm_nav mb-0 ps-0 d-xxl-none list-unstyled ${
                show ? "" : "start-0"
              }`}
            >
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Home</a>
              </li>
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Your benefits</a>
              </li>
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Our process</a>
              </li>
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Our works</a>
              </li>
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Testimonials</a>
              </li>
              <li>
                <a className='nav_a c_pointer' onClick={showNav}>Start a project</a>
              </li>

              <span>
                <button className="nav_btn">Get started</button>
              </span>
            </ul>
          </div>
        </Nav>
      </>
    </>
  );
};

export default MyNav;
