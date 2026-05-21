import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function User() {
	const { user, logout } = useAuth();

	const navigate = useNavigate();

	function handleClick() {
		navigate("/");
		logout();
	}

	return (
		<div className="p-4 rounded-2xl absolute mt-10   bg-gray-600 flex items-center gap-5">
			<img
				src={user?.image}
				alt={user?.name}
				className="h-12 w-12 rounded-full"
			/>
			<span className="font-semibold text-white">{user?.name}</span>
			<Button onClick={handleClick}>log out</Button>
		</div>
	);
}

export default User;
