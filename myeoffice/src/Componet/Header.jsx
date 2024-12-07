import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {

    useEffect(() => {
        const dropdownToggle = document.querySelectorAll('[data-bs-toggle="dropdown"]');
        dropdownToggle.forEach((toggle) => {
            toggle.addEventListener("click", (event) => {
                event.preventDefault();
            });
        });
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: "10px 50px" }}>
                <div className="container-fluid">
                    
                    {/* Logo Section */}
                    <a className="navbar-brand" href="#" style={{ display: "flex", alignItems: "center" }}>
                        <img src="https://myeoffice.in/wp-content/uploads/2022/08/my-eOffice-Softwares-Horizontal-Color.png" alt="logo" style={{ height: "50px", width: "auto" }}/>
                    </a>

                    {/* Toggler Button for Mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Nav Links */}
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto" style={{ gap: "30px" }}>
                            <li className="nav-item"> <a className="nav-link" href="#">HOME</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">ABOUT</a> </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link " href="#" id="dropdownMenu" role="button" data-bs-toggle="dropdown">
                                    OUR PRODUCTS <i className="fas fa-chevron-down"></i>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">BLOG</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">CONTACT</a>
                            </li>
                        </ul>
                    </div>

                    {/* Offcanvas Button */}
                    <div>
                        <button className="btn d-none d-md-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                            style={{ backgroundColor: "#007bff", color: "white", borderRadius: "5px", padding: "10px 15px",}}>
                            <i className="fa fa-bars"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Offcanvas Section */}
            <div className="offcanvas offcanvas-end"tabIndex="-1" id="offcanvasRight">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">
                        Offcanvas Menu
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Content goes here...</p>
                </div>
            </div>
        </>
    );
}
