import { Link } from "react-router-dom";
import "./NavBar.css";
export default function NavBar({ data }) {
  return (
    <nav className="container">
      <Link to="/" className="link">
        Home
      </Link>
      {data.map((item) => (
        <Link key={item.id} to={`/${item.id}`} className="link">
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
