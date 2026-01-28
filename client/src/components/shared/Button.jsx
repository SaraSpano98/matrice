const Button = ({ type = "default", children, ...props }) => {
  const base = "px-4 py-2 rounded font-semibold transition-colors";
  const styles = {
    default: "bg-accent text-light hover:bg-accent/80",
    primary: "bg-secondaryAccent text-dark hover:bg-secondaryAccent/80",
  };
  return (
    <button className={`${base} ${styles[type] || styles.default}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
