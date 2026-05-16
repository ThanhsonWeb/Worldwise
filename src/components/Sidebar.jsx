import logo from "../assets/img/logo.png";
import { NavLink, Outlet } from "react-router-dom";

function Sidebar() {
	return (
		<div className="p-10 bg-gray-800 w-1/2 text-white ">
			<div>
				<img src={logo} alt="logo" className="h-13 mx-auto " />
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
		</div>
	);
}

export default Sidebar;
