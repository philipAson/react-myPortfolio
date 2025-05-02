import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HoverableLink from "./HoverableLink";

const NavBar = ({ registerLetter }) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      {[
        { label: "Links", path: "/" },
        { label: "About", path: "/about" },
      ].map(({ label, path }) => (
        <Link to={path} className="nav-link" key={path}>
          <HoverableLink
            as="h2"
            onRegister={registerLetter}
            className="nav-heading"
            style={{ color: isActive(path) ? "crimson" : "inherit" }}
          >
            {isActive(path) ? `> ${label}` : label}
          </HoverableLink>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;




