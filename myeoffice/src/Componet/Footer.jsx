import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div>
            <footer className="container-fluid footer-bg" style={{ marginTop: "100px" }}>
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <i class="fas fa-chevron-up"></i>
                </button>
                <div className="container-fluid">
                    <div className="row m-4">
                        
                        {/* Large Column */}
                        <div className="col-md-6 p-3" >
                            <p className="footer-title">MyEOffice Softwares Private Limited</p> <br />
                            <p className="footer-text ">
                                <img src="https://myeoffice.in/wp-content/uploads/2022/08/my-eOffice-Softwares-Horizontal-Color.png" alt="" height={"50px"} width={"auto"} />
                            </p>

                            <p style={{ fontSize: "16px", lineHeight: "30px", color: "#364A61", margin: "20px 0px 30px", fontWeight: "400" }}>We are a leading IT company that specializes in providing digital office <br /> software solutions to businesses of all sizes. Our mission is to simplify <br /> the way businesses work by providing cutting-edge technologies that <br /> streamline processes and improve efficiency.</p>

                            <div className="social-icons">
                                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </div>

                        {/* Small Column 1 */}
                        <div className="col-md-3 p-3">
                            <p className="footer-title">Company</p> <br />

                            <ul className="footer-list">
                                <li> <a href=""><i class="fas fa-long-arrow-alt-right"></i> Home </a></li>
                                <li> <a href=""><i class="fas fa-long-arrow-alt-right"></i> About Us </a></li>
                                <li> <a href=""><i class="fas fa-long-arrow-alt-right"></i> Contact </a></li>
                                <li> <a href=""><i class="fas fa-long-arrow-alt-right"></i> Privacy Policy </a></li>
                                <li> <a href=""><i class="fas fa-long-arrow-alt-right"></i> Terms of Servise </a></li>
                            </ul> <br />

                            <p className="footer-title">Products</p> <br />

                            <ul className="footer-list">
                                <li> <a href=""><i class="fas fa-check-circle"></i> DMS </a></li>
                                <li> <a href=""><i class="fas fa-check-circle"></i> Document Template </a></li>
                                <li> <a href=""><i class="fas fa-check-circle"></i> RealBooks </a></li>
                            </ul> <br />
                        </div>

                        {/* Small Column 2 */}
                        <div className="col-md-3 p-3">
                            <p className="footer-title">Contact Us</p> <br />

                            <ul className="footer-list">
                                <li> <a href=""><i class="fas fa-phone"></i> + 91 9906743321 </a></li>
                                <li> <a href=""><i class="fas fa-phone"></i> + 91 9906743321 </a></li>
                                <li> <a href=""><i class="fas fa-envelope-open-text"></i> sales@myeoffice.in </a></li>
                                <li> <a href=""><i class="fas fa-map-marker-alt"></i>  3, Grd.Flr., Shail, Nr.Swagat  <br />Restaurant, Opp. Madhusudan <br /> House, Ahmedabad, Gujarat, <br /> 380006 </a></li>
                            </ul> <br />
                        </div>
                    </div>

                    <div className="row bottom-bar">
                        <div className="col-md-6 text-white">All Rights Reserved, Copyright © 2024 MYEOFFICE SOFTWARES PRIVATE LIMITED.
                        </div>
                        <div className="col-md-6 text-end text-white cont"> <a href="#">Contact Us</a></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
