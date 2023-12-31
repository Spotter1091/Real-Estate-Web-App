import React from "react";
import Navbar from "../../Components/Common/Header/Navbar";
import { estateFeatures } from "./Data/EstateFeatures";
import Footer from "../../Components/Common/Footer/Footer";
import { Link } from "react-router-dom";
import { Link as ScrollLink} from "react-scroll";
import ImageSlider from "./ImageSlider";
import "./EstatePage.css";

export default function EstatePage() {
//   const estateFeatures = [
//     "Good Road",
//     "Sport Centre",
//     "Power Supply",
//     "Perimeter Fencing",
//     "Maximum Security",
//   ];

  return (
    <>
      <Navbar />
      <div>
        <main>
          <div className="headings">
            <h1 className="h1-title">Fajuyi Estate</h1>
          </div>
          <div className="location">
            <img
              src="/images/location-marker.png"
              alt="Location icon"
              style={{ width: "2.87rem", height: "2.8rem" }}
            />
            <div className="para-text">
              <p>Eksuth Road, Adebayo, Ado Ekiti.</p>
            </div>
          </div>
          <div className="wrapper">
            <div className="slides">
              <ImageSlider />
            </div>

            <div className="description">
              <p className="desc-para">
                FAJUYI is an estate beautifully designed with a blend of
                serenity, comfort, recreation & wholesome family life. It is a
                dynamic landscape where opportunities for investment and growth
                abound. The estate is located in the beautiful community of
                oke-baale along Iworoko Road, Ado, Ekiti State..
              </p>

              <ScrollLink
                activeClass="active"
                to="targetSection"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button className="map-btn">View Map</button>
              </ScrollLink>
            </div>
          </div>

          <div className="btn-wrapper">
            <Link to="/fajuyiLand">
              <button className="booking-btn">Reserve a plot</button>
            </Link>
            <Link to="/fajuyiHouse">
              <button className="booking-btn">Own a house</button>
            </Link>
          </div>

          <section className="estate-features">
            <h2>Estate Features</h2>
            <div className="estate-features-container">
              {estateFeatures.map(({ id, img, features }) => (
                <div>
                  <div key={id} className="estate-feature">
                    <div className="icons">
                      <img src={img} alt="Estate Features Icons" />
                    </div>

                    <div className="icons-text">{features}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="map-wrapper" id="targetSection">
            <div className="map">
              <img src="/images/map.png" alt="A map" />
            </div>
            <div className="r-wrapper">
              <div className="quick-r-btn">
                <a href="https://wa.me/08136154917" target="_blank">
                  <img
                    src="/icons/whatsapp.png"
                    alt="whatsapp"
                    className="whatsapp-icon"
                  />

                  <button className="resp-btn"> Quick Response</button>
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

//    <ul>
//      {estateFeatures.map((feature, index) => (
//        <li key={index}>{feature}</li>
//      ))}
//    </ul>;
