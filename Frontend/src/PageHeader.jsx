import { Link } from "react-router-dom";

export default function PageHeader({child}){
    return(
        <>
         {/* Page Header Start */}
  <div className="container-fluid page-header mb-5 py-5">
    <div className="container">
      <h1 className="display-3 text-white mb-3 animated slideInDown">
        {child}
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb text-uppercase">
          <li className="breadcrumb-item">
            <Link className="text-white" to="#">
              Home
            </Link>
          </li>
          {/* <li className="breadcrumb-item">
            <Link className="text-white" to="#">
              Pages
            </Link>
          </li> */}
          <li className="breadcrumb-item text-white active" aria-current="page">
            {child}
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
        </>
    )
}