import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>About us</h1>
        <p style={styles.subtitle}>
          Quality without compromise.
        </p>
      </section>

      {/* CONTENT */}
      <section style={styles.content}>
        <div style={styles.card} className="about-card">
          <h3>Our Story</h3>
          <p>
            Sarah S Accessories Maison was founded with a vision to make elegant,
            high-quality accessories accessible to everyone. Each piece is
            thoughtfully selected to complement both casual and statement looks.
          </p>
        </div>

        <div style={styles.card} className="about-card">
          <h3>Our Philosophy</h3>
          <p>
            Accessories are more than fashion, they are personal expressions.
            Our collections are curated to help you feel confident, polished,
            and effortlessly stylish.
          </p>
        </div>

        <div style={styles.card} className="about-card">
          <h3>Why Customers Trust Us</h3>
          <ul style={styles.list}>
            <li>Hand-picked premium accessories</li>
            <li>Attention to detail and durability</li>
            <li>Simple WhatsApp ordering</li>
            <li>Customer-first service</li>
          </ul>
        </div>
      </section>

      {/* RESPONSIVE + ANIMATIONS */}
      <style>
        {`
          @keyframes fadeSlide {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .about-card {
            animation: fadeSlide 0.6s ease both;
            transition: transform 0.35s ease, box-shadow 0.35s ease;
          }

          @media (hover: hover) {
            .about-card:hover {
              transform: translateY(-8px);
              box-shadow: 0 20px 40px rgba(59, 130, 246, 0.15);
            }

            .about-card:hover h3 {
              color: #3B82F6;
            }
          }

          /* MOBILE */
          @media (max-width: 640px) {
            h1 {
              font-size: 2rem;
            }

            .about-card {
              padding: 22px;
            }
          }

          /* TABLET */
          @media (max-width: 900px) {
            h1 {
              font-size: 2.2rem;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    padding: "64px 16px",
    maxWidth: "1000px",
    margin: "0 auto",
    color: "#FFFFFF",
  },

  header: {
    textAlign: "center",
    marginBottom: "56px",
  },

  title: {
    fontSize: "2.6rem",
    marginBottom: "12px",
  },

  subtitle: {
    color: "#9CA3AF",
    fontSize: "1rem",
    maxWidth: "520px",
    margin: "0 auto",
    lineHeight: 1.6,
  },

  content: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "28px",
  },

  card: {
    backgroundColor: "#121622",
    border: "1px solid #1F2937",
    borderRadius: "18px",
    padding: "28px",
    lineHeight: 1.7,
  },

  list: {
    marginTop: "14px",
    paddingLeft: "20px",
    color: "#9CA3AF",
    lineHeight: 1.7,
  },
};
