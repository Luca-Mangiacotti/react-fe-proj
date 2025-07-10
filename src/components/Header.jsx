import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar mb4">
        <div className="container-fluid justify-content-start">
          <Link to="/">Homepage</Link>
        </div>
      </nav>
    </header>
  );
}
