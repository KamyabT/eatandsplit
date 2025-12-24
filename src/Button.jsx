const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-warning d-flex align-self-end w-50 justify-content-center"
    >
      {children}
    </button>
  );
};

export default Button;
