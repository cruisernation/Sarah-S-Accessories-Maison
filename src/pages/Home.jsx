import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay} />

        <div style={styles.heroContent}>
          <h1 style={styles.brand}>Sarah S Accessories Maison</h1>
          <p style={styles.tagline}>Quality without compromise.</p>

          <Link to="/shop" style={styles.primaryBtn}>
            Shop Collection
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Pieces</h2>

        <div style={styles.productsGrid}>
          <div style={styles.card} className="product-card">
            <img
              src="https://images.unsplash.com/photo-1602752250015-52934bc45613"
              alt="Gold Necklace"
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>Gold Necklace</h3>
            <p style={styles.price}>₦15,000</p>
          </div>

          <div style={styles.card} className="product-card">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a"
              alt="Silver Bracelet"
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>Silver Bracelet</h3>
            <p style={styles.price}>₦8,000</p>
          </div>

          <div style={styles.card} className="product-card">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Luxury Wrist Watch"
              style={styles.productImage}
            />
            <h3 style={styles.productTitle}>Luxury Wrist Watch</h3>
            <p style={styles.price}>₦25,000</p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section style={styles.trust}>
        <div style={styles.trustItem}>
          <h3>Premium Quality</h3>
          <p>Carefully selected accessories that last.</p>
        </div>

        <div style={styles.trustItem}>
          <h3>Fast Response</h3>
          <p>Order directly via WhatsApp.</p>
        </div>

        <div style={styles.trustItem}>
          <h3>Trusted Brand</h3>
          <p>Loved by customers nationwide.</p>
        </div>
      </section>

      {/* RESPONSIVE + ANIMATIONS */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Hover only on non-touch devices */
          @media (hover: hover) {
            .product-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 18px 35px rgba(59,130,246,0.18);
            }

            img:hover {
              transform: scale(1.06);
            }
          }

          /* MOBILE */
          @media (max-width: 640px) {
            section {
              padding-left: 16px;
              padding-right: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#0B0D12",
    color: "#FFFFFF",
    minHeight: "100vh",
    fontFamily: "system-ui, sans-serif",
  },

  /* HERO */
  hero: {
    position: "relative",
    minHeight: "min(85vh, 760px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  heroOverlay: {
    position: "absolute",
    inset: 0,
    backgroundColor: "rgba(11,13,18,0.75)",
  },

  heroContent: {
    position: "relative",
    zIndex: 2,
    animation: "fadeIn 1.2s ease-out",
    padding: "0 16px",
    maxWidth: "720px",
  },

  brand: {
    fontSize: "clamp(2rem, 5vw, 3.2rem)",
    marginBottom: "12px",
    animation: "float 4s ease-in-out infinite",
  },

  tagline: {
    color: "#9CA3AF",
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    marginBottom: "32px",
    lineHeight: 1.6,
  },

  primaryBtn: {
    backgroundColor: "#1E3A8A",
    color: "#FFFFFF",
    padding: "14px 34px",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    display: "inline-block",
  },

  /* SECTIONS */
  section: {
    padding: "clamp(48px, 8vw, 80px) 20px",
  },

  sectionTitle: {
    textAlign: "center",
    marginBottom: "48px",
    fontSize: "clamp(1.6rem, 4vw, 2rem)",
  },

  productsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "28px",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  card: {
    backgroundColor: "#121622",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #1F2937",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
  },

  productImage: {
    width: "100%",
    aspectRatio: "4 / 3",
    objectFit: "cover",
    borderRadius: "12px",
    marginBottom: "16px",
    transition: "transform 0.4s ease",
  },

  productTitle: {
    fontSize: "1.05rem",
    marginBottom: "6px",
  },

  price: {
    color: "#3B82F6",
    fontWeight: "600",
  },

  trust: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "28px",
    padding: "clamp(48px, 8vw, 80px) 20px",
    backgroundColor: "#121622",
    textAlign: "center",
  },

  trustItem: {
    padding: "8px",
    lineHeight: 1.6,
  },
};
