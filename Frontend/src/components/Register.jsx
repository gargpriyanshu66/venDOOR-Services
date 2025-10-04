import PageHeader from "../PageHeader";

export default function Register(){
    return(
        <>
            <PageHeader child={"Register"}/>
        
      <div
        className="mt-4 container position-relative wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "-6rem" }}
      >
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="bg-light text-center p-5">
              <h1 className="mb-4">Register</h1>
              <form>
                <div className="row">
                    <div className="col-12 col-sm-6 p-2">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Name"
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-6 p-2">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Phone No."
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Email"
                      style={{ height: 45 }}
                    />
                  </div>
                  <div className="col-12 col-sm-12 p-2">
                    <input
                      type="email"
                      className="form-control border-0"
                      placeholder="Your Password"
                      style={{ height: 45 }}
                    />
                  </div>

                  <div className="col-12 p-3">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}