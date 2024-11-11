import React from "react";
import "./footer.css";
import Logo from "../assest/boat.svg";

function Foot() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            <b>Disclaimer:</b> This Boat clone project is a mere simulation
            and is not affiliated with Boat in any way.
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Shop By Features</p>
            <p> Noise</p>
            <p> Payment</p>
            <p>Large playback</p>
          </div>
          <div className="second-row">
            <p className="bold">About Boat</p>
            <p>Sell products on Boat</p>
            <p>Boat Business Card</p>
            <p>Boat and COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell apps on Boat</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Boat Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Boat Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About Boat</p>
              <p>Sell products on Boat</p>
              <p>Boat Business Card</p>
              <p>Boat and COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Boat</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold">Boat Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <img src={Logo} className="amazon-img" />
          <div className="dev-data">
            <p>&copy; 2024 | Developed by </p>
            <a
              className="dev-link"
              href="https://github.com/Undercoder567"
              target="_blank"
            >
             Ujjawal Kumar
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foot;
