import logo from "../assets/img/logo.png";
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer";
import AppNav from "./AppNav";

function Sidebar() {
	return (
		<div className="p-10  bg-gray-800 md:w-110  flex flex-col h-screen">
			<div>
				<Link to="/">
					<img src={logo} alt="logo" className="h-13 mx-auto " />
				</Link>
			</div>
			<AppNav />

			<Outlet />

			<Footer />
		</div>
	);
}

export default Sidebar;
