import React, { useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Backtop() {

    const scrollFunction = () => {
        const mybutton = document.getElementById("topBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.onscroll = scrollFunction;
        return () => {
            window.onscroll = null;
        };
    }, []);
    return (
        <div>
            <button id="topBtn" onClick={scrollToTop} className="btn btn-primary position-fixed bottom-0 end-0 m-4"
                style={{ display: "none", borderRadius: "50%", width: "50px", height: "50px" }} >
                <i className="fas fa-arrow-up"></i>
            </button>
        </div>
    )
}
