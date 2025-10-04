import { Link } from "react-router-dom";

export default function Header(){
    return(
        <>
  {/* Topbar Start */}
  <div className="container-fluid bg-light d-none d-lg-block">
    <div className="row align-items-center top-bar">
      <div className="col-lg-3 col-md-12 text-center text-lg-start">
        <Link to="" className="navbar-brand m-0 p-0">
          <h1 className="text-primary m-0">venDOOR Services</h1>
        </Link>
      </div>
      <div className="col-lg-9 col-md-12 text-end">
        <div className="h-100 d-inline-flex align-items-center me-4">
          <i className="fa fa-map-marker-alt text-primary me-2" />
          <p className="m-0">123 Street, New York, USA</p>
        </div>
        <div className="h-100 d-inline-flex align-items-center me-4">
          <i className="far fa-envelope-open text-primary me-2" />
          <p className="m-0">info@example.com</p>
        </div>
        <div className="h-100 d-inline-flex align-items-center">
          <Link className="btn btn-sm-square bg-white text-primary me-1" to="">
            <i className="fab fa-facebook-f" />
          </Link>
          <Link className="btn btn-sm-square bg-white text-primary me-1" to="">
            <i className="fab fa-twitter" />
          </Link>
          <Link className="btn btn-sm-square bg-white text-primary me-1" to="">
            <i className="fab fa-linkedin-in" />
          </Link>
          <Link className="btn btn-sm-square bg-white text-primary me-0" to="">
            <i className="fab fa-instagram" />
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid nav-bar bg-light">
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
      <Link
        to=""
        className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none"
      >
        <h1 className="text-primary m-0">VenDOOR Services</h1>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav me-auto">
          <Link to="index.html" className="nav-item nav-link active">
            Home
          </Link>
          <Link to="about.html" className="nav-item nav-link">
            About
          </Link>
          <Link to="service.html" className="nav-item nav-link">
            Services
          </Link>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Pages
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="booking.html" className="dropdown-item">
                Booking
              </Link>
              <Link to="team.html" className="dropdown-item">
                Technicians
              </Link>
              <Link to="testimonial.html" className="dropdown-item">
                Testimonial
              </Link>
              <Link to="404.html" className="dropdown-item">
                404 Page
              </Link>
            </div>
          </div>
          <Link to="contact.html" className="nav-item nav-link">
            Contact
          </Link>
        </div>
        <div className="mt-4 mt-lg-0 me-lg-n4 py-3 px-4 bg-primary d-flex align-items-center">
          <div
            className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
            style={{ width: 45, height: 45 }}
          >
            <i className="fa fa-phone-alt text-primary" />
          </div>
          <div className="ms-3">
            <p className="mb-1 text-white">Emergency 24/7</p>
            <h5 className="m-0 text-secondary">+012 345 6789</h5>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
</>

    )
}