import logo from "../assets/img/logo.png";
import { NavLink, Outlet, Link } from "react-router-dom";
import Footer from "./Footer";

function Sidebar() {
	return (
		<div className="p-10 bg-gray-800 w-1/2 text-white ">
			<div>
				<Link to="/">
					<img src={logo} alt="logo" className="h-13 mx-auto " />
				</Link>
			</div>

			<nav>
				<ul className="flex gap-2 justify-center  my-6 ">
					<li className="bg-gray-600 p-3 cursor-pointer">
						<NavLink to="cities">Cities</NavLink>
					</li>
					<li className="bg-gray-600 p-3 cursor-pointer">
						<NavLink to="countries">Countries</NavLink>
					</li>
				</ul>
			</nav>

			<Outlet />

			<Footer />
		</div>
	);
}

export default Sidebar;
