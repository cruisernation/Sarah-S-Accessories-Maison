export default function Button({
  children,
  style = {},
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      className={className}
      style={{
        padding: "12px 20px",
        cursor: "pointer",
        border: "1px solid black",
        borderRadius: "14px", // default radius
        outline: "none",
        background: "inherit",

        ...style, // ✅ IMPORTANT: allow parent override
      }}
    >
      {children}
    </button>
  );
}
