import bcc_logo from "../images/bcc_logo.jpg";
import Nav from "./Nav";
import Calendar from "./Calendar";
import About from "./About";
import Pictures from "./Pictures";

const Hero = () => {
  return (
    <div style={{minWidth: "100%", alignItems: "center"}}>
      <img id="hero-logo" src={bcc_logo} alt="logo" />
      <Nav />
      <About />
      <Pictures />
      <Calendar />
    </div>
  )
}

export default Hero;