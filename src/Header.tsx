import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { appActions } from "./redux/appSlice";

export default function Header() {
  const username = useSelector((state: any) => state.app.username);
  const isLoggedIn = useSelector((state: any) => state.app.isLoggedIn);
  const dispatch = useDispatch();
  function logOut() {
    dispatch(appActions.logout());
    localStorage.clear();
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link data-testid="brand" className="navbar-brand" to="/">Auth Demo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
          </ul>

          {
            isLoggedIn ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Welcome {username}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logOut}>Logout</Link>
              </li>
            </ul> : <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Welcome {username}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
              </li>
            </ul>
          }


        </div>
      </div>
    </nav>
  )
}
