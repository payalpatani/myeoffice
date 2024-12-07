import React, { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'aos/dist/aos.css';
import AOS from 'aos';




export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-up");
          } else {
            entry.target.classList.remove("animate-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const heroBox = document.querySelector(".hero-box");
    if (heroBox) observer.observe(heroBox);

    return () => {
      if (heroBox) observer.unobserve(heroBox);
    };
  }, []);


  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  

  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid hero-section py-5">
        <div className="row align-items-center" style={{ marginTop: "50px" }}>
          {/* Left Content */}
          <div
            className="col-md-6 col-sm-12 text-center text-md-start"
            style={{ padding: "50px", paddingTop: "40px" }}
          >
            <h2 className="display-4 fw-bold">
              Document <br /> <span className="text-primary">Management</span>{" "}
              System
            </h2>
            <p className="mt-3 text-muted">
              Our document management system software is designed to simplify
              the way you manage your documents in the Office. With our
              solution, you can easily access your important documents from
              anywhere, at any time, and on any device.
            </p>

            <div className="mt-4 button">
              <button className=" btn-primary me-3 fw-bold buutt1" style={{ padding: "12px 25px", letterSpacing: "3px", backgroundColor: "blue", border: "none", color: "white", borderRadius: "5px" }}>LOG IN</button>
              <span style={{ color: "gray" }}>OR</span>
              <button className="  ms-3 fw-bold fs-6  buutt1" style={{ padding: "12px 20px", letterSpacing: "2px", textTransform: "uppercase", border: "2px solid blue", color: "blue", backgroundColor: "white", borderRadius: "5px" }}>
                Book Your Demo
              </button>
            </div>

          </div>

          {/* Right Image */}
          <div className="col-md-6 col-sm-12 text-center mt-2 mt-md-0">

            <img src="https://myeoffice.in/wp-content/uploads/2024/06/kindpng_1247377-1536x880-1.webp" alt="Document Management Illustration" className="img-fluid" />

          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="hero-section2">
        <div className="hero-box container p-5 rounded shadow-lg">
          <div className="row align-items-center">
            {/* Text Content */}
            <div className="col-md-7 text-center text-md-start">
              <div className="icon mb-3">
                <img
                  src="https://myeoffice.in/wp-content/uploads/2022/08/document-50x50.png"
                  alt="icon"
                  width="60"
                />
              </div>
              <h4 className="fw-bold mb-3 hero-title">
                Document Management System for <br />
                Manage your daily documents easily
              </h4>
              <p className="text-muted hero-description">
                With our <strong>Document Management System (DMS)</strong>{" "}
                software, you no longer need to worry about saving and managing
                your daily documents easily. Our solution makes it easy to
                access your documents from anywhere, on any device, and reuse
                them as needed. You’ll have complete control over your
                documents, and our user-friendly interface makes managing them
                a breeze. Say goodbye to the hassle of document management and
                hello to a more efficient, streamlined workflow with our DMS
                software.
              </p>
              <button className="btn btn-danger px-4 py-2 mt-3 hero-btn fw-bold">
                <i class="far fa-share-square"></i> JOIN US
              </button>
            </div>

            {/* Image Content */}
            <div className="col-md-5 text-center mt-4 mt-md-0 img2">
              <img
                src="https://myeoffice.in/wp-content/uploads/2024/06/3-1536x1536-1.webp"
                alt="Document Illustration"
                className="img-fluid hero-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* section 3 */}

      <div className="container-fluid d-flex justify-content-center align-items-center mb-2 " style={{ marginTop: "100px" }}>
        <div className="col-12 col-sm-12 col-md-12 col-lg-auto text-center">
          <div className="colum p-2" style={{ border: "none", display: "inline-block", width: "50%", padding: "2px", backgroundColor: "#e0ffe6" }}>
            <p style={{ fontSize: "17px", margin: "0", width: "100%" }}>Document Management System</p>
          </div> <br /> <br />
          <div className="col-lg-12">
            <h1 style={{ fontWeight: "bold" }}>Your Document is now <br />
              <span style={{ color: "blue" }}>pocket friendly </span>, Literally!</h1>
          </div> <br />
          <div className="col-lg-12">
            <p className='p1'>Our document management system software supports all formats related to documents, including expenses, purchases, sales, <br /> and more. You can easily categorize all your documents by category,  and you will find groups and subgroups of each category <br /> to upload your documents to. You can save your documents according to the organization, financial year, group, and subgroup. <br /> With our system, you can carry all your important business documents with you in your pocket. This feature is particularly <br /> beneficial for your accountant, who can access the documents they need at any time. You can also easily share documents <br /> with others via WhatsApp or email directly from our mobile application.</p>
          </div>
        </div>
      </div>  <br /> <br /> <br /><br />

      {/* section 4 */}

   <div className="container">

{/* part 1 */}

      <div className="row d-flex " style={{ alignItems:"center"}}>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"justify"}}>
            <div className="colum p-2 " style={{ border: "none", display: "inline-block", width: "50%",  backgroundColor: "#fff5dc" }}>
              <p style={{ fontSize: "15px", margin: "0", width: "100%" }}>Document Management System</p>
            </div> <br />  <br /> 

            <div className="p2">
              <p style={{fontSize:"25px" , fontWeight:"400", lineHeight:"35px"}}>You can easily manage your <br /> business or your client’s documents</p>
            </div> 

            <div className="p3">
              <p style={{fontWeight:"400"}}>More than 1000 clients are registered in our system and more <br /> than 1 lakh documents are being managed.</p>
            </div> <br /> 

            <div className="arrow">
              <p ><a href="#"> Let's Join</a>      <i class="fas fa-long-arrow-alt-right" style={{color:"blue"}}></i></p>
              <div className="divinder1"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
            <div className="immgg" data-aos="fade-up">
            <img className='img-fluid' src="https://myeoffice.in/wp-content/uploads/2024/06/Data_security_05-1536x1536-1.webp" alt="" />
            </div>
          </div>
        </div> <br /> <br /><br />


{/* part 2 */}

        <div className="row d-flex " style={{justifyContent:"space-between"}}>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"justify"}}>
            <div className="colum p-2 " style={{ border: "none", display: "inline-block", width: "50%",  backgroundColor: "#ebebfd" }}>
              <p style={{ fontSize: "15px", margin: "0", width: "100%" }}>Document Management System</p>
            </div> <br />  <br /> 

            <div className="p2">
              <p style={{fontSize:"22px" , fontWeight:"400", lineHeight:"50px"}}><strong> <i>Boost your work</i> </strong> <span style={{color:"blue"}} > <i>experience! </i> </span> <br />
              Access documents anytime, <br /> anywhere, and from any device.</p>
            </div> 

            <div className="p3">
              <p style={{fontWeight:"400"}}>You will get the best experience from our website. But 90% of <br /> people use applications to access documents quickly.</p>
            </div> <br /> 

            <div className="arrow">
              <p ><a href="#"> Let's Boots</a>      <i class="fas fa-long-arrow-alt-right" style={{color:"blue"}}></i></p>
              <div className="divinder2"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
            <div className="immgg" data-aos="fade-up">
            <img className='img-fluid' src="https://myeoffice.in/wp-content/uploads/2024/06/Work_7-1536x1536-1.webp" alt="" />
            </div>
          </div>
        </div>  <br /> <br /> <br /><br />

{/* part 3 */}

        <div className="row d-flex " style={{justifyContent:"space-between"}}>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"justify"}}>
            <div className="colum p-2 " style={{ border: "none", display: "inline-block", width: "50%",  backgroundColor: "#f8ebfd" }}>
              <p style={{ fontSize: "15px", margin: "0", width: "100%" }}>Document Management System</p>
            </div> <br />  <br /> 

            <div className="p2">
              <p style={{fontSize:"25px" , fontWeight:"500", lineHeight:"40px"}}><span style={{color:"#0f6fde", fontWeight:"bold"}}> <i>It’s Really Possible! </i> </span> <br />
              Categorize your documents very <br /> quickly and save your future time</p>
            </div> 

            <div className="p3">
              <p style={{fontWeight:"400"}}>Move any document into a Group and Sub-group according to <br /> its category.</p>
            </div> <br /> 

            <div className="arrow">
              <p ><a href="#"> Let's Categorize</a>      <i class="fas fa-long-arrow-alt-right" style={{color:"blue"}}></i></p>
              <div className="divinder3"></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={{textAlign:"center"}}>
            <div className="immgg" data-aos="fade-up">
            <img className='img-fluid' src="https://myeoffice.in/wp-content/uploads/2024/06/4788363-1536x1536-1.webp" alt="" />
            </div>
          </div>
        </div>
  </div>
    </div>
  );
}
