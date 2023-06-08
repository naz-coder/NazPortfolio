import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BiUpArrowCircle } from "react-icons/bi";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollToTop);
    return () => {
      window.removeEventListener("scroll", handleScrollToTop);
    };
  }, []);

  return (
    <TopBtnStyle>
      <div
        className={`scrollToTopButton ${isVisible ? "visible" : "hidden"}`}
        onClick={scrollToTop}
      >
        <p className="up-icon" onClick={handleScrollToTop}>
          <BiUpArrowCircle className="top-icon" />
        </p>
      </div>
    </TopBtnStyle>
  );
};

export default BackToTop;

export const TopBtnStyle = styled.div`
  .scrollToTopButton {
    color: #8b3611;
    cursor: pointer;
    display: none;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    font-size: 3rem;
    border: none;
    outline: none;
    padding: 0px 5px;
    border-radius: 4px;
    transition: opacity 0.3s;
  }

  .scrollToTopButton.visible {
    display: block;
  }

  .scrollToTopButton:hover {
    color: #521d06;
  }
`;
