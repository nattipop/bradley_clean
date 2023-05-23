/* eslint-disable jsx-a11y/anchor-is-valid */
const Nav = () => {
  return (
    <nav id="nav" data-spy="affix" data-offset-top="50">
      <ul className="nav justify-content-center nav-style">
        <li className="nav-item">
          <a href="/"><h1 className="nav-link text-dark">HOME</h1></a>
        </li>
        <li className="nav-item">
          <a href="/schedule-consultation"><h1 className="nav-link text-dark">SCHEDULE A CONSULTATION</h1></a>
        </li>
        <div class="dropdown nav-item">
          <a class="dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
            <h1 className="nav-link text-dark">ABOUT</h1>
          </a>

          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/about-hannah">About Hannah</a></li>
            <li><a class="dropdown-item" href="/our-team">Meet Our Team</a></li>
          </ul>
        </div>
        <li className="nav-item">
          <a href="/our-work"><h1 className="nav-link text-dark">OUR WORK</h1></a>
        </li>
        <li className="nav-item">
          <a href="/reviews"><h1 className="nav-link text-dark">REVIEWS</h1></a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;