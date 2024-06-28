import React from "react";
import GeneralHeader from "./components/GeneralHeader";
import Footer from "./components/Footer";
import rect1 from "./assets/img/Rectangle 1.jpg";
import "../src/styles/About.css";

const About = () => {
  return (
    <div>
      <GeneralHeader />
      <div className="about">
        <div className="div1">
          <div className="text">
            <p>
              QuickFunds- Your trusted financial partner for loans. Quick
              approvals, competitive rates, and personalized solutions to meet
              your unique needs. Empowering you to achieve your financial goals.
              Apply online today!
            </p>
            <input className="button" type="submit" value="View portfolio" />
          </div>
          <img src={rect1} alt="Imagen" className="image" />
        </div>
        <div className="div2">
          <img src={rect1} alt="Imagen" className="image" />
          <div className="content">
            <p>
              QuickFunds - Your trusted financial partner for loans. Quick
              approvals, competitive rates, and personalized solutions to meet
              your unique needs. Empowering you to achieve your financial goals.
              Apply online today!
            </p>
            <input className="button" type="submit" value="Contact" />
          </div>
        </div>
        <div className="div1">
          <div className="text">
            <p>
              QuickFunds- Your trusted financial partner for loans. Quick
              approvals, competitive rates, and personalized solutions to meet
              your unique needs. Empowering you to achieve your financial goals.
              Apply online today!
            </p>
          </div>
          <img src={rect1} alt="Imagen" className="image" />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default About;
