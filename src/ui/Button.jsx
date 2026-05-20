function Button({ children, variant = "primary", onClick, type }) {
	const base =
		"font-semibold uppercase rounded-md transition-colors duration-200 cursor-pointer";

	const style = {
		primary: "bg-emerald-400 hover:bg-emerald-500 text-black px-3 py-2 ",
	};

	const className = `${base} ${style[variant]}`;

	return (
		<button type={type} onClick={onClick} className={className}>
			{children}
		</button>
	);
}

export default Button;
