import React from "react";
import Navbar from "../Components/Common/Header/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import { Link } from "react-router-dom";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <div>
          <img
            src="/images/aboutus-hero.png"
            alt="Location icon"
            className="hero-image"
          />
        </div>
        <div className="para-box">
          <p className="aboutus-para">
            Home of Honour is a trusted and award winning real estate
            development company operating out of Ekiti Nigeria, with over 5 real
            estate products across the Ekiti Metropolitan Cities. <br />
            With 50 trained independent marketers, we have been able to help
            over 159 Nigerians become property owners of over over one 1000
            square metres of well documented and titled landed properties within
            the space of 4 years.
            <br />
            Our Success story is not far-fetched: we are diligent and we keep
            our word. <br />
            Our focus is to bring clarity to, and demystify the process of
            buying and selling real estate in Nigeria: especially in Ekiti
            State. All our Properties are free from Government acquisitions,
            land-grabbers trouble or any other encumbrance whatsoever. <br />
            We offer other value added services including but not limited to
            legal advice on property matters, architectural drawings etc. <br />
            Under the leadership of our amiable chairman, Chief Bosun Makinde,
            our mission is to render top-notch services to our numerous
            satisfied clients while maintaining the highest standards of
            integrity without stress or hassel
          </p>
        </div>

        <section className="award-container">
          <div className="award-title-container flex">
            <h2 className="award-title">AWARDS</h2>
            <p className="award-sub-txt">
              Among several others, we have been honored with numerous awards
              such as:
            </p>
          </div>
          <div className="grid-container">
            <div className="grids">
              <div className="box-flex">
                <div className="award-container">
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>
                  <div className="box">
                    <p className="box-text">
                      real estate excellence awards nomination (2021).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>

                  <div className="box">
                    <p className="box-text">
                      West Africa Innovation Awards (Most Customer Driven
                      Property Development Company Of The Year).
                    </p>
                  </div>
                </div>

                <div>
                  <div className="dashicon-one">
                    <img
                      src="/icons/dashicons_awards.svg"
                      className="dashicon-one-img center-circle"
                      alt="Award icon"
                    />
                  </div>

                  <div className="box">
                    <p className="box-text">
                      The Nigerian Real Estate And Property Award (Real Estate
                      Company Of The Year, 2022).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <img
            src="/images/boardroom.png"
            alt="Mission & vision"
            className="mission-img"
          />
        </section>
      </div>
      <Footer />
    </>
  );
}
