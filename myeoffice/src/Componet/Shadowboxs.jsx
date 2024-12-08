import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';
import AOS from 'aos';


export default function Shadowboxs() {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div>
            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="row boxxess1">
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", padding: "10px", gap: "30px", justifyContent: "center", }} >
                        <div className="twoparts">
                            <img src="https://myeoffice.in/wp-content/uploads/2022/08/backup-150x150.png" alt="" height={"80px"} />
                        </div>

                        <div className="text1">
                            <h3 style={{ fontWeight: "700", paddingTop: "40px" }}>
                                Organized way Segregation
                            </h3>{" "}
                            <br />
                            <p style={{ lineHeight: "30px", fontWeight: "400", color: "black", }}>
                                It is very easy to save the document in the My eDMS software{" "}
                                <br /> and divide it into its categories.
                            </p>{" "}
                            <br />
                            <button className="button5">
                                <a href="#">BOOK YOUR DEMO</a>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ alignItems: "center" }} >
                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center", marginTop: "100px", }} >
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px", alignItems: "center" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/1_financial-Year-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Financial Year
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Financial year wise simple <br /> arrangement
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2022/08/workflow-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Categories
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Group & subgroup wise <br /> document categorization
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />

                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center", }}>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/3_Client-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>Client</p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Create a client and add its <br /> documents to it.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/category-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Unique Class
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Create unique groups and <br /> subgroups for clients.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />
                    </div>
                </div>
            </div>

            {/* part 2 */}

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "50vh" }}>
                <div className="row boxxess2">

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ alignItems: "center" }} >
                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center",  }} >
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px", alignItems: "center" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/3_Client-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Client Creation
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        First of all you add all your <br /> clients in the system.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2022/08/roles-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        User Control
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Set roles & rights to user, <br /> also assign clients to user.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />

                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center", }}>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/workflow-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>Workflow</p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Set up a workflow in your <br /> client document
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/email-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Share & Email
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Download or email your <br /> document to share in bulk.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", padding: "10px", gap: "30px", justifyContent: "center", }} >
                        <div className="twoparts">
                            <img src="https://myeoffice.in/wp-content/uploads/2023/02/Funcationality-150x150.png" alt="" height={"80px"} />
                        </div>

                        <div className="text1">
                            <h3 style={{ fontWeight: "700", paddingTop: "40px" }}>
                                Basic Functionality Must Required
                            </h3>{" "}
                            <br />
                            <p style={{ lineHeight: "30px", fontWeight: "400", color: "black", }}>
                                Your work will be simple with the functionality of very simple <br /> but valuable work. Let’s book your demo!
                            </p>{" "}
                            <br />
                            <button className="button5">
                                <a href="#">GET DMS NOW</a>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* part 3 */}

            <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <div className="row boxxess3">
                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ display: "flex", padding: "10px", gap: "30px", justifyContent: "center", }} >
                        <div className="twoparts">
                            <img src="https://myeoffice.in/wp-content/uploads/2023/02/4_Document-Care-150x150.png" alt="" height={"80px"} />
                        </div>

                        <div className="text1">
                            <h3 style={{ fontWeight: "700", paddingTop: "40px" }}>
                                We care about your documents!
                            </h3>{" "}
                            <br />
                            <p style={{ lineHeight: "30px", fontWeight: "400", color: "black", }}>
                                In the system, your document will be classified according to <br /> its type and you will also get the support of a secure server.

                            </p>{" "}
                            <br />
                            <button className="button5">
                                <a href="#">CONNECT WITH US</a>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ alignItems: "center" }} >
                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center", marginTop: "100px", }} >
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px", alignItems: "center" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/5_Monthly-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Monthly
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Powerful financial platform <br /> for growing businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/6_Quarterly-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Quarterly
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Powerful financial platform <br /> for growing businesses.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />

                        <div className="row d-flex" style={{ justifyContent: "space-evenly", alignItems: "center", }}>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/8_HalfYear-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>Half Yearly</p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Powerful financial platform <br /> for growing businesses.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex" style={{ gap: "20px" }} >
                                <div className="imgss">
                                    <img src="https://myeoffice.in/wp-content/uploads/2023/02/7_year-50x50.png" alt="" />
                                </div>
                                <div className="typing1" style={{ lineHeight: "20px" }}>
                                    <p style={{ fontSize: "23px", fontWeight: "bold" }}>
                                        Yearly
                                    </p>
                                    <p style={{ fontWeight: "400", fontSize: "15px" }}>
                                        Powerful financial platform <br /> for growing businesses.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        <br />
                    </div>
                </div>
            </div>

            {/* section 5 */}

            <div className="container-fluid hero-section22 py-5">
                <div className="row align-items-center" style={{ marginTop: "10px", display: "flex", justifyContent: "space-evenly" }}>
                    {/* Left Content */}
                    <div className=" col-lg-6 col-md-6 col-sm-12 text-center text-md-start" style={{ padding: "30px" }}>
                        <h4 className="display-4 fw-bold" style={{ fontSize: "42px", letterSpacing: "1px" }}>
                            <span className="text-primary"><i>Easy to Access! </i></span>{" "} <br />
                            Your document will now be <br /> pocket friendly.
                        </h4>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 text-sm-center">
                        <p className="fontext" style={{ fontSize: "16px", lineHeight: "30px", color: "#333333" }}>
                            That’s great! which allows users to manage their documents on the <br />
                            go. The app provides features such as document scanning, uploading, editing, <br />
                            sharing, and storing in the cloud. Users can access their documents anytime <br />
                            and anywhere, making it convenient for them to work on the go.
                        </p> <br />
                        <div className="buttomm d-flex gap-5" style={{ justifyContent: "start" }}>
                            <button className="btn btn-primary fw-bold" style={{ padding: "8px 30px" }}> <i class="fas fa-robot"></i>      ANDROID APP</button>
                            <button className="btn btn-primary fw-bold" style={{ padding: "8px 30px" }}><i class="fab fa-apple"></i>         IOS APP</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: "-180px" }}>
                <div className="row d-flex" style={{ justifyContent: "space-evenly" }}>
                    <div className="col-lg-5 col-md-5 col-sm-12" >
                        <img src="https://myeoffice.in/wp-content/uploads/2024/06/ss1-323x596-1.webp" alt="" data-aos="fade-up" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <img src="https://myeoffice.in/wp-content/uploads/2024/06/ss2-323x596-1.webp" alt="" data-aos="fade-up" />
                    </div>
                </div>
            </div> <br /> <br />

            {/*section 6  */}
            <div className="container-fluid d-flex justify-content-center align-items-center">
                <div className="row boxxess6">


                    <div className="col-lg-6 col-md-6 col-sm-12" style={{ padding: "10px", textAlign: "justify", justifyContent: "start" }} >

                        <div className="text1">
                            <h3 style={{ fontWeight: "700", paddingTop: "40px", fontSize: "33px" }}>
                                <span style={{ color: "blue" }}> Very simple, Very Affordable!</span> <br />
                                you can get full access from this <br /> package.
                            </h3>{" "}
                            <br />
                            <p style={{ lineHeight: "30px", fontWeight: "400", color: "black", }}>
                                If you need any help, we can arrange a demo for you. This will bring <br /> you closer to our software.
                            </p>{" "}
                            <br />
                            <button className="button5">
                                <a href="#"> <i class="far fa-share-square"></i>   LET'S SIGN UP</a>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center my-3">
                        <div className="position-relative w-100 border border-dark rounded " style={{ backgroundColor: "rgb(219, 245, 219)" }}>
                            <span className="position-absolute top-0 start-25 translate-middle px-2  p-2" style={{ top: "-10px", left: "80px", borderRadius: "5px", color: "white", backgroundColor: "green" }}>
                                Corporate
                            </span>
                            <div className="teexxtt" style={{ textAlign: "justify", justifyContent: "start", padding: "10px" }}>
                                <p className="mt-3 ">Starts at <br />
                                    <span style={{ color: "black", fontSize: "23px" }}> <b>₹15000/Year</b> </span></p>

                                <ul>
                                    <li>1 Admin User & 4 Staff User</li>
                                    <li> Unlimited Organization/Client</li>
                                    <li>Unlimited Client User</li>
                                    <li>10 GB Storage</li>
                                </ul>

                                <p className='pl-4'><a href="#" style={{ color: "green", fontWeight: "bold", textDecoration: "none" }}> GET STARTED        <i class="fas fa-long-arrow-alt-right"></i></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div> <br /> <br /><br />


            {/* section 7 */}

            <div className="container mt-4">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h3 style={{ fontSize: "30px", fontWeight: "700", lineHeight: "40px" }}>Better End-to-end solutions to your questions. <br />
                            We are here for you!
                        </h3>  <br />
                        <button className="button55">
                            <a href="#"> <i class="far fa-share-square"></i>  Tell Us Your Query</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
