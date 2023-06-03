import bcc_logo from "../images/Bcc_white.png";
import Calendar from "./Calendar";
import About from "./About";
import Pictures from "./Pictures";

const Home = () => {
  return (
    <div style={{minWidth: "100%"}}>
      <div className="row" id="hero-background" >
        <div className="col auto-center stay-right">
          <h3>Cleaing service in<br/>Moscow, Idaho</h3>
        </div>
        <div className="col" id="hero-circle">
          <img id="hero-logo" src={bcc_logo} alt="logo" />
        </div>
        <div className="col auto-center stay-left">
          <h3>(715) 642-5924<br/>hannah@bradleyclean.com</h3>
        </div>
      </div>
      <div id="gradient">
        <div className="services-home">
          <h1>We Offer General And Deep Cleaning Services For</h1>
          <div className="row">
            <div
              className="col service-divs"
              onMouseOver={() => {
                document.getElementById("bathroom-button").style.display = "block";
              }}
              onMouseLeave={() => {
                document.getElementById("bathroom-button").style.display = "none";
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/900/900688.png" width="100px" className="service-icons" style={{padding: "10px"}} alt="bathroom"/>
              <h3>Bathrooms</h3>
              <button id="bathroom-button" className="theme-button info-button">More Info</button>
            </div>
            <div
              className="col service-divs"
              onMouseOver={() => {
                document.getElementById("kitchen-button").style.display = "block";
              }}
              onMouseLeave={() => {
                document.getElementById("kitchen-button").style.display = "none";
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/2237/2237462.png" width="100px" className="service-icons" alt="kitchen" />
              <h3>Kitchens</h3>
              <button id="kitchen-button" className="theme-button info-button">More Info</button>
            </div>
            <div
              className="col service-divs"
              onMouseOver={() => {
                document.getElementById("living-button").style.display = "block";
              }}
              onMouseLeave={() => {
                document.getElementById("living-button").style.display = "none";
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/4565/4565608.png" width="100px" className="service-icons" alt="living area" />
              <h3>Living Areas</h3>
              <button id="living-button" className="theme-button info-button">More Info</button>
            </div>
            <div
              className="col service-divs"
              onMouseOver={() => {
                document.getElementById("bedroom-button").style.display = "block";
              }}
              onMouseLeave={() => {
                document.getElementById("bedroom-button").style.display = "none";
              }}
            >
              <img src="https://cdn-icons-png.flaticon.com/512/6192/6192020.png" width="100px" className="service-icons" alt="bedroom" />
              <h3>Bedrooms</h3>
              <button id="bedroom-button" className="theme-button info-button">More Info</button>
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