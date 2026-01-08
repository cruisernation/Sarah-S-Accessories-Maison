import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "./assets/logo.png";

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* LOGO */}
        <Link to="/" style={styles.brandWrapper}>
          <img src={logo} alt="Sarah S Accessories Logo" style={styles.logo} />
          <span style={styles.brandText}>Sarah S Accessories Maison</span>
        </Link>

        {/* DESKTOP NAV (HIDDEN ON MOBILE) */}
        <nav className="desktop-nav" style={styles.navDesktop}>
          <NavLink to="/" label="Home" active={isActive("/")} />
          <NavLink to="/shop" label="Shop" active={isActive("/shop")} />
          <NavLink to="/about" label="About" active={isActive("/about")} />
          <NavLink to="/cart" label="Cart" active={isActive("/cart")} />
          <NavLink to="/contact" label="Contact" active={isActive("/contact")} />
        </nav>

        {/* HAMBURGER (MOBILE ONLY) */}
        <button
          className="hamburger"
          style={styles.hamburger}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {menuOpen && (
        <div style={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}

      {/* MOBILE MENU */}
      <aside
        style={{
          ...styles.mobileMenu,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          style={styles.closeBtn}
          aria-label="Close menu"
        >
          ✕
        </button>

        <NavLinkMobile to="/" label="Home" close={() => setMenuOpen(false)} />
        <NavLinkMobile to="/shop" label="Shop" close={() => setMenuOpen(false)} />
        <NavLinkMobile to="/about" label="About" close={() => setMenuOpen(false)} />
        <NavLinkMobile to="/cart" label="Cart" close={() => setMenuOpen(false)} />
        <NavLinkMobile to="/contact" label="Contact" close={() => setMenuOpen(false)} />
      </aside>

      {/* MEDIA QUERIES */}
      <style>
        {`
          /* Hide desktop nav on mobile */
          @media (max-width: 900px) {
            .desktop-nav {
              display: none !important;
            }
          }

          /* Hide hamburger on desktop */
          @media (min-width: 901px) {
            .hamburger {
              display: none;
            }
          }
        `}
      </style>
    </header>
  );
}

function NavLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(active && styles.active),
      }}
    >
      {label}
    </Link>
  );
}

function NavLinkMobile({ to, label, close }) {
  return (
    <Link to={to} style={styles.mobileLink} onClick={close}>
      {label}
    </Link>
  );
}

const styles = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    backgroundColor: "#0B0D12",
    borderBottom: "1px solid #1F2937",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "14px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  brandWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },

  logo: {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
  },

  brandText: {
    color: "#FFFFFF",
    fontSize: "1rem",
    fontWeight: "700",
  },

  navDesktop: {
    display: "flex",
    alignItems: "center",
    gap: "22px",
  },

  link: {
    color: "#9CA3AF",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
  },

  active: {
    color: "#FFFFFF",
  },

  hamburger: {
    background: "none",
    border: "none",
    color: "#FFFFFF",
    fontSize: "1.8rem",
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 99,
  },

  mobileMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    height: "100vh",
    width: "260px",
    backgroundColor: "#0B0D12",
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    zIndex: 100,
    transition: "transform 0.35s ease",
  },

  closeBtn: {
    background: "none",
    border: "none",
    color: "#FFFFFF",
    fontSize: "1.5rem",
    alignSelf: "flex-end",
    cursor: "pointer",
  },

  mobileLink: {
    color: "#E5E7EB",
    textDecoration: "none",
    fontSize: "1.05rem",
  },
};
