import bcc_logo from "../images/Bcc-black 01 Artboard 1.jpg";
import Calendar from "./Calendar";
import About from "./About";
import Pictures from "./Pictures";

const Home = () => {
  return (
    <div style={{minWidth: "100%"}}>
      <div className="row" >
        <div className="col-3 display-flex-centered">
          <img id="hero-logo" src={bcc_logo} alt="logo" />
        </div>
        <div className="col-6 display-flex-centered">
          <h3>Cleaning service located in Moscow, ID</h3>
        </div>
        <div className="col-2">
          <p style={{minWidth: "150px"}}>(715) 642-5924</p>
          <p>hannah@bradleyclean.com</p>
        </div>
      </div>
      <div id="gradient">
        <About />
        <Pictures />
        <Calendar />
      </div>
    </div>
  )
}

export default Home;