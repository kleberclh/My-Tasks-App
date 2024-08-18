import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <a href="/" className="text-xl font-bold">
            My Tasks App
          </a>
        </div>
        <ul className="flex space-x-4">
          <a className="hover:text-gray-400">
            <Link to="/">Home</Link>
          </a>
          <li>
            <a className="hover:text-gray-400">
              <Link to="/">Preços</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Sobre
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <Link to="/login">Login</Link>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
