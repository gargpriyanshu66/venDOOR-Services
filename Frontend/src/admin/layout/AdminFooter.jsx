import { Link } from "react-router-dom";

export default function AdminFooter(){
    return(
        <>
        {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Address</h4>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-2">
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-twitter" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-facebook-f" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-youtube" />
            </Link>
            <Link className="btn btn-outline-light btn-social" to="">
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Opening Hours</h4>
          <h6 className="text-light">Monday - Friday:</h6>
          <p className="mb-4">09.00 AM - 09.00 PM</p>
          <h6 className="text-light">Saturday - Sunday:</h6>
          <p className="mb-0">09.00 AM - 12.00 PM</p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Services</h4>
          <Link className="btn btn-link" to="">
            Drain Cleaning
          </Link>
          <Link className="btn btn-link" to="">
            Sewer Line
          </Link>
          <Link className="btn btn-link" to="">
            Water Heating
          </Link>
          <Link className="btn btn-link" to="">
            Toilet Cleaning
          </Link>
          <Link className="btn btn-link" to="">
            Broken Pipe
          </Link>
        </div>
        <div className="col-lg-3 col-md-6">
          <h4 className="text-light mb-4">Newsletter</h4>
          <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
          <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
            <input
              className="form-control border-0 w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <button
              type="button"
              className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="copyright">
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            ©{" "}
            <Link className="border-bottom" to="#">
              venDOOR Services
            </Link>
            , All Right Reserved.
          </div>
          <div className="col-md-6 text-center text-md-end">
            
            Designed By Priyanshu Garg
            Distributed By <Link to="#">venDOOR Services</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <Link
    to="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-5 back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </Link>
        </>
    )
}