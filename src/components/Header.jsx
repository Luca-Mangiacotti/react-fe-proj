import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="d-flex align-items-center justify-content-between px-5 rounded-bottom">
      <Link to="/">
        <img alt="logo" src="../img/logo.png" className="logo" />
      </Link>
      <nav className="d-flex justify-content-between align-items-center gap-3">
        <Link to="/" className="btn btnav font-weight-bold hov">
          {" "}
          Comics{" "}
        </Link>
        <Link to="/categories" className="btn btnav font-weight-bold hov">
          {" "}
          Categories{" "}
        </Link>
      </nav>
    </header>
  );
}
