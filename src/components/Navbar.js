import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Log Out</Link></li>
      </ul>
    </nav>
  );
}
