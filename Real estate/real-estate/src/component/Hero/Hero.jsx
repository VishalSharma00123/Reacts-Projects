import "./Hero.css";
import Button from "../Header/button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth hero-container">
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle" />
              <h1>
                Discover
                <br />
                Most Suitable <br /> Property
              </h1>
            </div>
            <div className="flexColStart hero-des">
              <span className="secondaryText">
                Find a variety of properties that suit you very easilty
              </span>
              <br />
              <span className="secondaryText">
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="flexCenter search-bar">
              <LocationOnIcon style={{ color: "var(--blue)", size: "25px" }} />
              <input type="text" />
              <button className="button">Search</button>
            </div>
            <div className="flexCenter stats">
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={8000} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className="flexColCenter stat">
                <span>
                  <CountUp end={28} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
              </div>
            </div>
          </div>
          <div className=" flexCenter hero-right">
            <div className="image-container">
              <img src="./images/hero-image.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
