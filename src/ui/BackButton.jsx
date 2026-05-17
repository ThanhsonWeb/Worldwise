import { useNavigate } from "react-router-dom";

function BackButton() {
	const navigate = useNavigate();

	return (
		<div>
			<button
				className="p-2 border px-3 rounded "
				onClick={() => navigate(-1)}
			>
				&larr; Back 
			</button>
		</div>
	);
}

export default BackButton;
