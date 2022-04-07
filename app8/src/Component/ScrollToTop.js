import './App.css';
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'

const ScrollToTop = () => {
    const [scollToTop, setScrollTop] = useState(0);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (document.scollTop > 400) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
    });
}, []);
    const goToTop = () => {
        document.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="topbtn">
            {" "}
            {scrollToTop && (
                <FontAwesomeIcon icon="faArrowAltCircleUp"
                    className="top-icon icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>
    );
export default ScrollToTop;
