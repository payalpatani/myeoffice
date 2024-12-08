import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [bgColor, setBgColor] = useState("#e0eafd");

  useEffect(() => {
    const dropdownToggle = document.querySelectorAll(
      '[data-bs-toggle="dropdown"]'
    );
    dropdownToggle.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setIsFixed(true);
        setBgColor("white");
      } else if (currentScrollY === 0) {
        setIsFixed(false);
        setBgColor("#e0eafd");
      } else {
        setIsFixed(false);
        setBgColor("#e0eafd");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav
        id="header"
        className={`navbar navbar-expand-lg navbar-light ${
          isFixed ? "fixed-top" : ""
        }`}
        style={{
          padding: "10px 50px",
          transition: "background-color 0.3s",
          backgroundColor: bgColor,
        }}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="https://myeoffice.in/wp-content/uploads/2022/08/my-eOffice-Softwares-Horizontal-Color.png"
              alt="logo"
              className="img-fluid"
              style={{ height: "50px", width: "auto" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ABOUT
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="dropdownMenu"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  OUR PRODUCTS <i className="fas fa-chevron-down"></i>
                </a>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BLOG
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <button
              className="btn btn-primary d-none d-md-block"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        data-bs-backdrop="false"
      >
        <div className="offcanvas-header d-flex justify-content-center align-items-center">
          <button
            type="button"
            className="btn-close offcanvas-close text-light"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
          <h5 className="offcanvas-title text-center mx-auto" id="offcanvasRightLabel">
            <img
              src="https://myeoffice.in/wp-content/uploads/2022/08/my-eOffice-Softwares-Horizontal-Color.png"
              alt="logo"
              height="50px"
              width="auto"
              className="d-block mx-auto"
            />
          </h5>
        </div>
        <div className="offcanvas-body text-center">
          <p>
            We help you digitize your office, and <br /> convert your office into an eOffice.
          </p> <br/><br/>
          <div className="d-flex justify-content-center">
            <div className="bg-primary text-white py-3 px-5 rounded">
              <ul className="footer-list1 list-unstyled mb-0">
                <li className="mb-2">
                  <i className="fas fa-phone bg-white text-primary p-3 rounded-circle me-3"></i>
                  + 91 9906743321
                </li>
                <li className="mb-2">
                  <i className="fas fa-phone bg-white text-primary p-3 rounded-circle me-3"></i>
                  + 91 9906743321
                </li>
                <li>
                  <i className="fas fa-envelope-open-text bg-white text-primary p-3 rounded-circle me-3"></i>
                  sales@myeoffice.in
                </li>
              </ul>
            </div>
          </div> <br/><br/><br/>

          <div className="social-icons2 mt-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
              className="me-3"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
