import { NavLink, Outlet } from "react-router-dom";

export default function () {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img src="../src/assets/img/film_logo.png" alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/movies"} className="nav-link">
                  Catalogo Film
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-5">
        <Outlet />
      </div>
    </>
  );
}
