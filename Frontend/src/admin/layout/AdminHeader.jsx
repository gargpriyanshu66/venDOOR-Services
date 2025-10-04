import { Link } from "react-router-dom";

export default function AdminHeader(){
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
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid nav-bar bg-light">
    <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">
      <Link
        to="/admin"
        className="navbar-brand d-flex align-items-center m-0 p-0 d-lg-none"
      >
        <h1 className="text-primary m-0">venDOOR Services</h1>
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
            <Link to="/admin" className="nav-item nav-link active">
            Dashboard
          </Link>
            <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Manage
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="booking.html" className="dropdown-item">
                Profile
              </Link>
              <Link to="team.html" className="dropdown-item">
                Customer
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Category
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="/admin/category/add" className="dropdown-item">
                Add
              </Link>
              <Link to="/admin/category/manage" className="dropdown-item">
                Manage
              </Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <Link
              to="#"
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              View
            </Link>
            <div className="dropdown-menu fade-up m-0">
              <Link to="booking.html" className="dropdown-item">
                Bookings
              </Link>
              <Link to="team.html" className="dropdown-item">
                Services
              </Link>
            </div>
          </div>
          <Link to="contact.html" className="nav-item nav-link">
            Manage Vendor
          </Link>
          <Link to="contact.html" className="nav-item nav-link">
            Bill
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
            <p className="mb-1 text-white">Welcome to</p>
            <h5 className="m-0 text-secondary">Admin Pannel</h5>
          </div>
        </div>
      </div>
    </nav>
  </div>
  {/* Navbar End */}
        </>
    )
}