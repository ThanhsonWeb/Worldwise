function Button({ children }) {
  return (
    <button
      className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold uppercase px-8 py-3 rounded-md transition-colors duration-200"
    >
      {children}
    </button>
  );
}

export default Button;
