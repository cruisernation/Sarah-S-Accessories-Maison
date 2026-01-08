import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

export default function Shop() {
  const { dispatch } = useCart();

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD", payload: product });
  };

  return (
    <div style={styles.container}>
      {/* HEADER */}
      <header style={styles.header}>
        <h1 style={styles.title}>Shop Accessories</h1>
        <p style={styles.subtitle}>
          Carefully selected pieces to elevate your style.
        </p>
      </header>

      {/* PRODUCTS GRID */}
      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card} className="product-card">
            {/* IMAGE */}
            <div style={styles.imageWrapper}>
              <img
                src={product.image}
                alt={product.name}
                style={styles.image}
                className="product-image"
              />
            </div>

            {/* CONTENT */}
            <div style={styles.content}>
              <h3 style={styles.productName}>{product.name}</h3>
              <p style={styles.price}>
                ₦{product.price.toLocaleString()}
              </p>
            </div>

            {/* ACTIONS */}
            <div style={styles.actions}>
              <Link
                to={`/product/${product.id}`}
                style={styles.viewLink}
              >
                View details
              </Link>

              {/* SAFE BUTTON WRAPPER */}
              <div className="add-to-cart-wrapper">
                <Button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGE + BUTTON EFFECTS */}
      <style>
        {`
          /* CARD HOVER */
          .product-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(59,130,246,0.18);
            cursor: pointer;
          }

          /* IMAGE ZOOM */
          .product-card:hover .product-image {
            transform: scale(1.1);
          }

          .product-image {
            transition: transform 0.6s ease;
          }

          /* LINK HOVER */
          .product-card:hover a {
            color: #3B82F6;
          }

          /* SOFT FADE-IN */
          .product-card {
            animation: fadeUp 0.6s ease both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* ADD TO CART BUTTON */
          .add-to-cart-wrapper button {
            border-radius: 14px;
            padding: 10px 18px;
            font-weight: 600;
            transition: all 0.25s ease;
          }

          .add-to-cart-wrapper button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(59,130,246,0.25);
          }

          .add-to-cart-wrapper button:active {
            transform: scale(0.94);
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
    color: "#FFFFFF",
  },

  header: {
    textAlign: "center",
    marginBottom: "60px",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },

  subtitle: {
    color: "#9CA3AF",
    fontSize: "1.05rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "32px",
  },

  card: {
    backgroundColor: "#121622",
    border: "1px solid #1F2937",
    borderRadius: "18px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.35s ease, box-shadow 0.35s ease",
  },

  imageWrapper: {
    backgroundColor: "#0B0D12",
    height: "240px",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "18px 20px",
  },

  productName: {
    fontSize: "1.05rem",
  },

  price: {
    color: "#3B82F6",
    fontWeight: "600",
    marginTop: "8px",
  },

  actions: {
    padding: "18px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "1px solid #1F2937",
  },

  viewLink: {
    color: "#9CA3AF",
    textDecoration: "none",
    fontSize: "0.9rem",
  },
};
