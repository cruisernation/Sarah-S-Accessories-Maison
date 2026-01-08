import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return <p style={{ color: "#fff", padding: 40 }}>Product not found.</p>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img src={product.image} alt={product.name} style={styles.image} />

        <div style={styles.info}>
          <h2>{product.name}</h2>
          <p style={styles.price}>₦{product.price.toLocaleString()}</p>
          <p style={styles.desc}>{product.description}</p>

          <button
            style={styles.button}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "60px 20px",
    maxWidth: "1100px",
    margin: "0 auto",
    color: "#fff",
  },
  card: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    backgroundColor: "#121622",
    border: "1px solid #1F2937",
    borderRadius: "16px",
    padding: "30px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  price: {
    color: "#3B82F6",
    fontSize: "1.4rem",
    fontWeight: "700",
  },
  desc: {
    color: "#9CA3AF",
    lineHeight: 1.6,
  },
  button: {
    marginTop: "20px",
    padding: "14px",
    backgroundColor: "#3B82F6",
    color: "#fff",
    border: "none",
    borderRadius: "999px",
    fontWeight: "600",
    cursor: "pointer",
  },
};
