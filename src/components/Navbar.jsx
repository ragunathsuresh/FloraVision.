import { HiSearch, HiMenu } from "react-icons/hi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import logoIcon from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Plants Type", href: "#trending" },
  { label: "More", href: "#top-selling" },
  { label: "Contact", href: "#footer" },
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="nav-shell pointer-events-auto">
        <div className="nav-inner">
          <a href="#home" className="logo-mark" aria-label="FloraVision Home">
          <img className="logo-icon" src={logoIcon} alt="" />
          <span>FloraVision.</span>
        </a>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button aria-label="Search" className="icon-plain">
            <HiSearch className="nav-icon" />
          </button>
          <button aria-label="Cart" className="icon-plain">
            <HiOutlineShoppingBag className="nav-icon" />
          </button>
          <button aria-label="Menu" className="icon-plain">
            <HiMenu className="nav-icon" />
          </button>
        </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
