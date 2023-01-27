import hannah from "../images/lp_image.jpeg"

const About = () => {
  return (
    <div className="container" id="about-section">
      <div className="row">
        <div className="col-2 text-center" id="headshot-div">
          <img id="hannah-headshot" src={hannah} alt="hannah" />
        </div>
        <div className="col about-text">
          <h1>About Hannah</h1>
          <p style={{paddingRight: "5vw"}}>Nullam eget felis eget nunc lobortis mattis. Pellentesque sit amet porttitor eget dolor morbi non arcu risus. Donec ultrices tincidunt arcu non sodales neque. Ac ut consequat semper viverra nam libero justo laoreet. Aliquet bibendum enim facilisis gravida neque convallis a. At elementum eu facilisis sed. Ullamcorper sit amet risus nullam eget felis eget nunc. Laoreet suspendisse interdum consectetur libero id faucibus. Neque convallis a cras semper auctor neque vitae tempus quam. Ornare arcu dui vivamus arcu. Nisi scelerisque eu ultrices vitae auctor eu. Ipsum a arcu cursus vitae congue. Dictum at tempor commodo ullamcorper a lacus. Id semper risus in hendrerit gravida rutrum. Nisl nisi scelerisque eu ultrices vitae auctor. Egestas fringilla phasellus faucibus scelerisque eleifend donec.</p>
        </div>
      </div>
    </div>
  )
}

export default About;