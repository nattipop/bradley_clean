import bcc_logo from "../images/Bcc_white.png";
import Calendar from "./Calendar";
import About from "./About";
import Pictures from "./Pictures";

const Home = () => {
  return (
    <div style={{minWidth: "100%"}}>
      <div className="row" id="hero-background" >
        <div id="hero-circle">
          <img id="hero-logo" src={bcc_logo} alt="logo" />
        </div>
      </div>
      <div id="gradient">
        <div className="services-home">
          <h1>We Offer General And Deep Cleaning Services For</h1>
          <div className="row">
            <div className="col">
              <h3>Bathrooms</h3>
            </div>
            <div className="col">
              <h3>Kitchens</h3>
            </div>
            <div className="col">
              <h3>Living Areas</h3>
            </div>
            <div className="col">
              <h3>Bedrooms</h3>
            </div>
          </div>
          <button className="theme-button">More Info</button>
        </div>
        <About />
        <Pictures />
        <Calendar />
      </div>
    </div>
  )
}

export default Home;