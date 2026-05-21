import PageNav from "../components/PageNav";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

function Login() {
	const { login, isAuthenticated } = useAuth();
	const [email, setEmail] = useState("AnhSondz@gmail.com");
	const [password, setPassword] = useState("123456");

	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		if (email && password) login(email, password);
		if (isAuthenticated) navigate("/app/cities");
	}

	return (
		<div className="h-[calc(100vh-5rem)] m-6 md:px-[5rem] py-[2.5rem] bg-gray-800 text-white">
			<PageNav />
			<div
				onSubmit={handleSubmit}
				className="flex items-center justify-center mt-30"
			>
				<form className="bg-gray-700 p-6 rounded-lg w-80 text-white">
					<label className="block mb-2 ">Email address</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-900 "
					/>

					<label className="block mb-2 ">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-900 "
					/>
					<Button type="submit">Login</Button>
				</form>
			</div>
		</div>
	);
}

export default Login;
