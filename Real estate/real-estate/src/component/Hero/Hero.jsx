import "./Hero.css";
import Button from "../Header/button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
              <span>
                Find a variety of properties that suit you very easilty
              </span>
              <br />
              <span>
                Forget all difficulties in finding a residence for you
              </span>
            </div>
            <div className="search-bar">
              <LocationOnIcon style={{ color: "var(--blue)", size: "25px" }} />
              <input type="text" />
              <button className="button">Search</button>
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
