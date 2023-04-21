const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="row display-flex-centered">
          <div className="col-sm-2" style={{textAlign: "center", marginBottom: "10px"}}>
            <a href="https://www.instagram.com/hannahirene4/"><img className="footer-icon" src="https://cdn-icons-png.flaticon.com/512/717/717392.png" alt="instagram" /></a>
          </div>
          <div className="info-footer col-sm-8">
            <p>hannah@bradleyclean.com<br/>(715) 642-5924</p>
          </div>
        </div>
        <p className="copyright info-footer text-center">
          Copyright 2023 | Website Designed and created by <a href="https://www.vitawd.com">Vita Web Design, LLC</a>
        </p>
      </div>
    </div>
  )
}

export default Footer;