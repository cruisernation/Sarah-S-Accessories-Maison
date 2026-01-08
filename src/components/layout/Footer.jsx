import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* BRAND */}
        <div className="footer-section">
          <h2 style={styles.brand}>Sarah S Accessories Maison</h2>
          <p style={styles.description}>
            Elegant, premium accessories designed to complement your style
            and elevate every look.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-section">
          <h4 style={styles.heading}>Explore</h4>
          <ul style={styles.list}>
            <li><Link to="/" style={styles.link}>Home</Link></li>
            <li><Link to="/shop" style={styles.link}>Shop</Link></li>
            <li><Link to="/cart" style={styles.link}>Cart</Link></li>
            <li><Link to="/about" style={styles.link}>About</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-section">
          <h4 style={styles.heading}>Order & Support</h4>
          <p style={styles.supportText}>
            Place orders or make enquiries directly via WhatsApp.
          </p>

          <a
            href="https://wa.me/+2347081772205"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.whatsappBtn}
            className="whatsapp-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        <p style={styles.copy}>
          © {new Date().getFullYear()} Sarah S Accessories Maison. All rights reserved.
        </p>
      </div>

      {/* EFFECTS & RESPONSIVENESS */}
      <style>
        {`
          /* LINK HOVER */
          a:hover {
            color: #FFFFFF;
          }

          /* WHATSAPP BUTTON EFFECTS */
          .whatsapp-btn {
            transition: all 0.3s ease;
          }

          .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 30px rgba(34,197,94,0.4);
          }

          .whatsapp-btn:active {
            transform: scale(0.94);
          }

          /* MOBILE OPTIMIZATION */
          @media (max-width: 640px) {
            .footer-section {
              text-align: center;
            }

            .whatsapp-btn {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0B0D12",
    borderTop: "1px solid #1F2937",
    marginTop: "100px",
  },

  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "70px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "50px",
    color: "#FFFFFF",
  },

  brand: {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "14px",
    letterSpacing: "0.5px",
  },

  description: {
    color: "#9CA3AF",
    fontSize: "0.95rem",
    lineHeight: 1.7,
    maxWidth: "320px",
  },

  heading: {
    fontSize: "1rem",
    marginBottom: "16px",
    fontWeight: "600",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  link: {
    color: "#9CA3AF",
    textDecoration: "none",
    fontSize: "0.95rem",
    transition: "color 0.2s ease",
  },

  supportText: {
    color: "#9CA3AF",
    fontSize: "0.95rem",
    lineHeight: 1.6,
    marginBottom: "14px",
  },

  whatsappBtn: {
    display: "inline-block",
    padding: "14px 22px",
    backgroundColor: "#22C55E",
    color: "#FFFFFF",
    textDecoration: "none",
    borderRadius: "14px",
    fontWeight: "600",
    fontSize: "0.95rem",
  },

  bottom: {
    borderTop: "1px solid #1F2937",
    padding: "18px 20px",
    textAlign: "center",
  },

  copy: {
    color: "#9CA3AF",
    fontSize: "0.85rem",
  },
};
