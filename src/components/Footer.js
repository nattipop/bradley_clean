import { useHref } from "react-router";

const Footer = () => {
  const href = useHref();
  return (
    <div id="footer">
      <div className="container" style={{width: "100vw", paddingBottom: "60px"}}>
        <div className="info-footer text-center">
          <p>hannah@bradleyclean.com<br/>(715) 642-5924</p>
        </div>
        <div style={{textAlign: "center", marginBottom: "10px"}}>
          <a href="https://www.instagram.com/hannahirene4/"><img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="instagram" /></a>
          <a href="https://www.facebook.com/hannah.poppe.96"><img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="facebook" /></a>
          <a href="https://twitter.com/hannahpoppe25"><img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="twitter" /></a>
        </div>
        <p className="col info-footer text-center">
          Copyright 2023 - Website designed and created by Natalie Poppe ®
        </p>
      </div>
    </div>
  )
}

export default Footer;