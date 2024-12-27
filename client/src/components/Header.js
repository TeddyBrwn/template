import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex justify-between">
      <div>
        <Link to="/">Logo</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="flex space-x-2">
        <Link to="/login">Login</Link>
        <p>/</p>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  );
}

export default Header;
