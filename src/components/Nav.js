/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
  return (
    <nav id="nav" data-spy="affix" data-offset-top="50">
      <ul className="nav justify-content-center nav-style">
        <li className="nav-item">
          <h1 className="nav-link text-dark" href="#calendar">SCHEDULE A CONSULTATION</h1>
        </li>
        <li className="nav-item">
          <h1 className="nav-link text-dark" onClick={() => {
            window.scrollTo({
              top: 300,
              left: 300,
              behavior: "smooth"
            })
          }}>ABOUT</h1>
        </li>
        <li className="nav-item">
          <h1 className="nav-link text-dark" href="#pictures">PICTURES</h1>
        </li>
        <li className="nav-item">
          <h1 className="nav-link text-dark" href="#reviews">REVIEWS</h1>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;