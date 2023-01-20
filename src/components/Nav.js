/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
  return (
    <nav id="nav" data-spy="affix" data-offset-top="50">
      <ul className="nav justify-content-center nav-style">
        <li className="nav-item">
          <a className="nav-link text-dark" href="#calendar">Schedule a Consultation</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" onClick={() => {
            window.scrollTo({
              top: 300,
              left: 300,
              behavior: "smooth"
            })
          }}>About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#pictures">Pictures</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#reviews">Reviews</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;