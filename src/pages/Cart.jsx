import { useCart } from "../context/CartContext";
import Button from "../components/ui/Button";
import { generateWhatsAppLink } from "../utils/whatsapp";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (!cart.length) {
    return (
      <div style={styles.empty}>
        <h2>Your cart is empty</h2>
        <p>Browse the shop and add items you love.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Shopping Cart</h1>

      <div style={styles.list}>
        {cart.map(item => (
          <div key={item.id} className="cart-item" style={styles.item}>
            <div style={styles.info}>
              <h3>{item.name}</h3>
              <p style={styles.price}>
                ₦{item.price.toLocaleString()}
              </p>
            </div>

            <div style={styles.controls}>
              <button
                style={{
                  ...styles.qtyBtn,
                  ...(item.qty === 1 && styles.qtyBtnDisabled),
                }}
                disabled={item.qty === 1}
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                    payload: { id: item.id },
                  })
                }
              >
                −
              </button>

              <span style={styles.qty}>{item.qty}</span>

              <button
                style={styles.qtyBtn}
                onClick={() =>
                  dispatch({
                    type: "INCREASE",
                    payload: { id: item.id },
                  })
                }
              >
                +
              </button>
            </div>

            <button
              style={styles.removeBtn}
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: { id: item.id },
                })
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div style={styles.summary}>
        <div>
          <h2>Total</h2>
          <p style={styles.total}>₦{total.toLocaleString()}</p>
        </div>

        <a
          href={generateWhatsAppLink(cart)}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <Button style={styles.checkoutBtn}>
            Order via WhatsApp
          </Button>
        </a>
      </div>

      <style>
        {`
          .cart-item {
            animation: fadeUp 0.4s ease both;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 640px) {
            .cart-item {
              grid-template-columns: 1fr;
              gap: 16px;
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    padding: "70px 20px",
    maxWidth: "900px",
    margin: "0 auto",
    color: "#FFFFFF",
  },
  title: {
    marginBottom: "40px",
    fontSize: "2rem",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",
  },
  item: {
    display: "grid",
    gridTemplateColumns: "1fr auto auto",
    gap: "20px",
    alignItems: "center",
    backgroundColor: "#121622",
    padding: "22px",
    borderRadius: "18px",
    border: "1px solid #1F2937",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  price: {
    color: "#3B82F6",
    fontWeight: "600",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  qtyBtn: {
    width: "36px",
    height: "36px",
    borderRadius: "10px",
    border: "1px solid #1F2937",
    background: "#0B0D12",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  qtyBtnDisabled: {
    opacity: 0.4,
    cursor: "not-allowed",
  },
  qty: {
    minWidth: "26px",
    textAlign: "center",
    fontWeight: "600",
  },
  removeBtn: {
    padding: "10px 16px",
    borderRadius: "12px",
    border: "1px solid #7F1D1D",
    background: "transparent",
    color: "#FCA5A5",
    cursor: "pointer",
  },
  summary: {
    marginTop: "55px",
    paddingTop: "30px",
    borderTop: "1px solid #1F2937",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "20px",
  },
  total: {
    fontSize: "1.6rem",
    color: "#3B82F6",
    fontWeight: "700",
  },
  checkoutBtn: {
    backgroundColor: "#1E3A8A",
    color: "#FFFFFF",
    padding: "16px 32px",
    fontWeight: "600",
    borderRadius: "14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  empty: {
    minHeight: "60vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#9CA3AF",
    textAlign: "center",
  },
};
