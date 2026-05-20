import PageNav from "../components/PageNav";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
function Login() {
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/app/cities");
	}

	return (
		<div className="h-[calc(100vh-5rem)] m-6 px-[5rem] py-[2.5rem] bg-gray-800 text-white">
			<PageNav />
			<div
				onSubmit={handleSubmit}
				className="flex items-center justify-center mt-30"
			>
				<form className="bg-gray-700 p-6 rounded-lg w-80 text-white">
					<label className="block mb-2 ">Email address</label>
					<input
						type="email"
						className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-900 "
					/>

					<label className="block mb-2 ">Password</label>
					<input
						type="password"
						className="w-full p-2 mb-4 rounded bg-gray-200 text-gray-900 "
					/>
					<Button type="submit">Login</Button>
				</form>
			</div>
		</div>
	);
}

export default Login;
