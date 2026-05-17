import { Link } from "react-router-dom";

function LinkButton({ children, to, variant = "primary" }) {
	const base =
		"font-semibold uppercase rounded-md transition-colors duration-200";

	const style = {
		primary: "bg-emerald-400 hover:bg-emerald-500 text-black px-6 py-3",
		secondly: "p-2 border px-3 ",
	};

	const className = `${base} ${style[variant]}`;

	return (
		<Link to={to} className={className}>
			{children}
		</Link>
	);
}

export default LinkButton;
