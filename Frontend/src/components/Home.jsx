import { Link } from "react-router-dom";

export default function Home(){
    return(
        <>
        
  {/* Carousel Start */}
  <div className="container-fluid p-0 mb-5">
    <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="/assets/img/carousel-1.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(0, 0, 0, .4)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Plumbing &amp; Repairing Services
                </h5>
                <h1 className="display-3 text-white animated slideInDown mb-4">
                  Efficient Residential Plumbing Services
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <Link
                  to=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </Link>
                <Link
                  to=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="/assets/img/carousel-2.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(0, 0, 0, .4)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-10 col-lg-8">
                <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                  Plumbing &amp; Repairing Services
                </h5>
                <h1 className="display-3 text-white animated slideInDown mb-4">
                  Efficient Commercial Plumbing Services
                </h1>
                <p className="fs-5 fw-medium text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  elitr.
                </p>
                <Link
                  to=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </Link>
                <Link
                  to=""
                  className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                >
                  Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div
          className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="/assets/img/service-1.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Residential Plumbing</h5>
            <Link
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              to=""
            >
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="/assets/img/service-2.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Commercial Plumbing</h5>
            <Link
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              to=""
            >
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 service-item-top wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="overflow-hidden">
            <img
              className="img-fluid w-100 h-100"
              src="/assets/img/service-3.jpg"
              alt=""
            />
          </div>
          <div className="d-flex align-items-center justify-content-between bg-light p-4">
            <h5 className="text-truncate me-3 mb-0">Emergency Servicing</h5>
            <Link
              className="btn btn-square btn-outline-primary border-2 border-white flex-shrink-0"
              to=""
            >
              <i className="fa fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* About Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="text-secondary text-uppercase">About Us</h6>
          <h1 className="mb-4">We Are Trusted Plumbing Company Since 1990</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3" />
            Residential &amp; commercial plumbing
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3" />
            Quality services at affordable prices
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3" />
            Immediate 24/ 7 emergency services
          </p>
          <div className="bg-primary d-flex align-items-center p-4 mt-5">
            <div
              className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt fa-2x text-primary" />
            </div>
            <div className="ms-3">
              <p className="fs-5 fw-medium mb-2 text-white">Emergency 24/7</p>
              <h3 className="m-0 text-secondary">+012 345 6789</h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 pt-4" style={{ minHeight: 500 }}>
          <div
            className="position-relative h-100 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="/assets/img/about-1.jpg"
              style={{ objectFit: "cover", padding: "0 0 50px 100px" }}
              alt=""
            />
            <img
              className="position-absolute start-0 bottom-0 img-fluid bg-white pt-2 pe-2 w-50 h-50"
              src="/assets/img/about-2.jpg"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Fact Start */}
  <div className="container-fluid fact bg-dark my-5 py-5">
    <div className="container">
      <div className="row g-4">
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.1s"
        >
          <i className="fa fa-check fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Years Experience</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.3s"
        >
          <i className="fa fa-users-cog fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Expert Technicians</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.5s"
        >
          <i className="fa fa-users fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Satisfied Clients</p>
        </div>
        <div
          className="col-md-6 col-lg-3 text-center wow fadeIn"
          data-wow-delay="0.7s"
        >
          <i className="fa fa-wrench fa-2x text-white mb-3" />
          <h2 className="text-white mb-2" data-toggle="counter-up">
            1234
          </h2>
          <p className="text-white mb-0">Compleate Projects</p>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
  {/* Service Start */}
  <div className="container-fluid py-5 px-4 px-lg-0">
    <div className="row g-0">
      <div className="col-lg-3 d-none d-lg-flex">
        <div className="d-flex align-items-center justify-content-center bg-primary w-100 h-100">
          <h1
            className="display-3 text-white m-0"
            style={{ transform: "rotate(-90deg)" }}
          >
            15 Years Experience
          </h1>
        </div>
      </div>
      <div className="col-md-12 col-lg-9">
        <div className="ms-lg-5 ps-lg-5">
          <div
            className="text-center text-lg-start wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <h6 className="text-secondary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our Services</h1>
          </div>
          <div
            className="owl-carousel service-carousel position-relative wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="bg-light p-4">
              <div
                className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                style={{ width: 75, height: 75 }}
              >
                <i className="fa fa-water fa-2x text-primary" />
              </div>
              <h4 className="mb-3">Drain Repair</h4>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Quality Service
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Customer Satisfaction
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Support 24/7
              </p>
              <Link to="" className="btn bg-white text-primary w-100 mt-2">
                Read More
                <i className="fa fa-arrow-right text-secondary ms-2" />
              </Link>
            </div>
            <div className="bg-light p-4">
              <div
                className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                style={{ width: 75, height: 75 }}
              >
                <i className="fa fa-toilet fa-2x text-primary" />
              </div>
              <h4 className="mb-3">Toilet Pipe Repair</h4>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Quality Service
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Customer Satisfaction
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Support 24/7
              </p>
              <Link to="" className="btn bg-white text-primary w-100 mt-2">
                Read More
                <i className="fa fa-arrow-right text-secondary ms-2" />
              </Link>
            </div>
            <div className="bg-light p-4">
              <div
                className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                style={{ width: 75, height: 75 }}
              >
                <i className="fa fa-shower fa-2x text-primary" />
              </div>
              <h4 className="mb-3">Sewer Line Repair</h4>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Quality Service
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Customer Satisfaction
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Support 24/7
              </p>
              <Link to="" className="btn bg-white text-primary w-100 mt-2">
                Read More
                <i className="fa fa-arrow-right text-secondary ms-2" />
              </Link>
            </div>
            <div className="bg-light p-4">
              <div
                className="d-flex align-items-center justify-content-center border border-5 border-white mb-4"
                style={{ width: 75, height: 75 }}
              >
                <i className="fa fa-tint fa-2x text-primary" />
              </div>
              <h4 className="mb-3">Water Heater Repair</h4>
              <p>
                Stet stet justo dolor sed duo. Ut clita sea sit ipsum diam lorem
                diam justo.
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Quality Service
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Customer Satisfaction
              </p>
              <p className="text-primary fw-medium">
                <i className="fa fa-check text-success me-2" />
                Support 24/7
              </p>
              <Link to="" className="btn bg-white text-primary w-100 mt-2">
                Read More
                <i className="fa fa-arrow-right text-secondary ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Booking Start */}
  <div className="container-fluid my-5 px-0">
    <div className="video wow fadeInUp" data-wow-delay="0.1s">
      <button
        type="button"
        className="btn-play"
        data-bs-toggle="modal"
        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
        data-bs-target="#videoModal"
      >
        <span />
      </button>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen=""
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-white mb-4">Emergency Plumbing Service</h1>
      <h3 className="text-white mb-0">24 Hours 7 Days a Week</h3>
    </div>
    <div
      className="container position-relative wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ marginTop: "-6rem" }}
    >
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="bg-light text-center p-5">
            <h1 className="mb-4">Book For A Service</h1>
            <form>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Your Name"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Your Email"
                    style={{ height: 55 }}
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <select
                    className="form-select border-0"
                    style={{ height: 55 }}
                  >
                    <option selected="">Select A Service</option>
                    <option value={1}>Service 1</option>
                    <option value={2}>Service 2</option>
                    <option value={3}>Service 3</option>
                  </select>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="date" id="date1" data-target-input="nearest">
                    <input
                      type="text"
                      className="form-control border-0 datetimepicker-input"
                      placeholder="Service Date"
                      data-target="#date1"
                      data-toggle="datetimepicker"
                      style={{ height: 55 }}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control border-0"
                    placeholder="Special Request"
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Booking End */}
  {/* Team Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">Our Technicians</h6>
        <h1 className="mb-5">Our Expert Technicians</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-1.jpg" alt="" />
            </div>
            <div className="team-text">
              <div className="bg-light">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
              <div className="bg-primary">
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-2.jpg" alt="" />
            </div>
            <div className="team-text">
              <div className="bg-light">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
              <div className="bg-primary">
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="team-item">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-3.jpg" alt="" />
            </div>
            <div className="team-text">
              <div className="bg-light">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
              <div className="bg-primary">
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="team-item">
            <div className="position-relative overflow-hidden">
              <img className="img-fluid" src="/assets/img/team-4.jpg" alt="" />
            </div>
            <div className="team-text">
              <div className="bg-light">
                <h5 className="fw-bold mb-0">Full Name</h5>
                <small>Designation</small>
              </div>
              <div className="bg-primary">
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-square mx-1" to="">
                  <i className="fab fa-instagram" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="text-center">
        <h6 className="text-secondary text-uppercase">Testimonial</h6>
        <h1 className="mb-5">Our Clients Say!</h1>
      </div>
      <div
        className="owl-carousel testimonial-carousel position-relative wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="testimonial-item text-center">
          <div className="testimonial-text bg-light text-center p-4 mb-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-2"
            src="/assets/img/testimonial-1.jpg"
            style={{ width: 80, height: 80 }}
          />
          <div className="mb-2">
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
          </div>
          <h5 className="mb-1">Client Name</h5>
          <p className="m-0">Profession</p>
        </div>
        <div className="testimonial-item text-center">
          <div className="testimonial-text bg-light text-center p-4 mb-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-2"
            src="/assets/img/testimonial-2.jpg"
            style={{ width: 80, height: 80 }}
          />
          <div className="mb-2">
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
          </div>
          <h5 className="mb-1">Client Name</h5>
          <p className="m-0">Profession</p>
        </div>
        <div className="testimonial-item text-center">
          <div className="testimonial-text bg-light text-center p-4 mb-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-2"
            src="/assets/img/testimonial-3.jpg"
            style={{ width: 80, height: 80 }}
          />
          <div className="mb-2">
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
          </div>
          <h5 className="mb-1">Client Name</h5>
          <p className="m-0">Profession</p>
        </div>
        <div className="testimonial-item text-center">
          <div className="testimonial-text bg-light text-center p-4 mb-4">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
              amet diam et eos. Clita erat ipsum et lorem et sit.
            </p>
          </div>
          <img
            className="bg-light rounded-circle p-2 mx-auto mb-2"
            src="/assets/img/testimonial-4.jpg"
            style={{ width: 80, height: 80 }}
          />
          <div className="mb-2">
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
            <small className="fa fa-star text-secondary" />
          </div>
          <h5 className="mb-1">Client Name</h5>
          <p className="m-0">Profession</p>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
</>

    )
}