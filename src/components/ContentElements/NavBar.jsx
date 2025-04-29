import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="navbar">
      {[
        { label: "Links", path: "/" },
        // { label: "resumé", path: "/resumé" },
        { label: "About", path: "/about" },
      ].map(({ label, path }) => (
        <Link to={path} className="nav-link" key={path}>
          <AnimatePresence mode="wait" initial={false}>
            {isActive(path) ? (
              <motion.h1
                key="text"
                className="dot"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                † † †
              </motion.h1>
            ) : (
              <motion.h1
                key="text"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {label}
              </motion.h1>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
};

export default NavBar;



