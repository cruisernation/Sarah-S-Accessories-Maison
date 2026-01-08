import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* HEADER */}
      <motion.section
        style={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1>Contact Us</h1>
        <p style={styles.subtitle}>
          We’re always ready to help you choose the perfect accessory.
        </p>
      </motion.section>

      {/* CONTACT CARD */}
      <motion.section
        style={styles.card}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <h3>Order & Enquiries</h3>

        <p style={styles.text}>
          For orders, questions, or custom requests, reach out to us directly
          on WhatsApp. We respond fast and personally.
        </p>

        <motion.a
          href="https://wa.me/+2347081772205"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          Chat on WhatsApp
        </motion.a>

        <div style={styles.info}>
          <p><strong>Business Hours:</strong> Mon – Sat, 9am – 6pm</p>
          <p><strong>Location:</strong> across Nigeria</p>
        </div>
      </motion.section>
    </motion.div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "700px",
    margin: "0 auto",
    color: "#FFFFFF",
  },

  header: {
    textAlign: "center",
    marginBottom: "50px",
  },

  subtitle: {
    color: "#9CA3AF",
    marginTop: "12px",
    fontSize: "1rem",
  },

  card: {
    backgroundColor: "#121622",
    border: "1px solid #1F2937",
    borderRadius: "16px",
    padding: "40px 30px",
    textAlign: "center",
    lineHeight: 1.7,
    boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
  },

  text: {
    color: "#9CA3AF",
    margin: "16px 0 30px",
  },

  button: {
    display: "inline-block",
    backgroundColor: "#22C55E", // green
    color: "#FFFFFF",
    padding: "14px 28px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "600",
  },

  info: {
    marginTop: "30px",
    fontSize: "0.9rem",
    color: "#9CA3AF",
  },
};
