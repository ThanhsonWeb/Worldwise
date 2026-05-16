import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
	return (
		<Link
			to={to}
			className="bg-emerald-400 hover:bg-emerald-500 text-black font-semibold uppercase px-8 py-3 rounded-md transition-colors duration-200"
		>
			{children}
		</Link>
	);
}

export default LinkButton;
