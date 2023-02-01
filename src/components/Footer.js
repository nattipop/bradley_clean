import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div id="footer">
      <div className="container" style={{width: "100vw", paddingBottom: "60px"}}>
        <div className="info-footer text-center">
          <p>hannah@bradleyclean.com<br/>(715) 642-5924</p>
        </div>
        <div style={{textAlign: "center", marginBottom: "10px"}}>
          <img onClick={() => navigate("https://www.instagram.com/hannahirene4/")} className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="instagram" />
          <img onClick={() => navigate("https://www.facebook.com/hannah.poppe.96")} className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="facebook" />
          <img onClick={() => navigate("https://twitter.com/hannahpoppe25")} className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" />
        </div>
        <p className="col info-footer text-center">
          Copyright 2023 - Website designed and created by Natalie Poppe ®
        </p>
      </div>
    </div>
  )
}

export default Footer;