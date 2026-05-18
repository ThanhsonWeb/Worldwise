function Button({ children, variant = "primary" }) {
	const base =
		"font-semibold uppercase rounded-md transition-colors duration-200 cursor-pointer";

	const style = {
		primary: "bg-emerald-400 hover:bg-emerald-500 text-black px-3 py-2 ",
	};

	const className = `${base} ${style[variant]}`;

	return <button className={className}>{children}</button>;
}

export default Button;
