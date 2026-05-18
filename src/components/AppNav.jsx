import { NavLink } from "react-router-dom";

function AppNav() {
	return (
		<nav>
			<ul className="flex gap-1 justify-center  my-6 text-white ">
				<li className="bg-gray-600 p-3 cursor-pointer rounded ">
					<NavLink to="cities">Cities</NavLink>
				</li>
				<li className="bg-gray-600 p-3 cursor-pointer rounded ">
					<NavLink to="countries">Countries</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default AppNav;
