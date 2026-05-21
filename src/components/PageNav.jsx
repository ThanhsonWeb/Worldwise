import logo from "../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";
import barIcon from "../assets/icon/bar.svg";
function PageNav() {
	return (
		<div className="flex items-center justify-between ">
			<Link to="/">
				<img src={logo} alt="logo" className="md:h-16 h-12" />
			</Link>

			<button className="md:hidden">
				<img src={barIcon} alt="barIcon" className="h-13" />
			</button>

			<nav className="md:block hidden">
				<ul className="flex gap-5 text-2xl text-amber-50 ">
					<li className="px-4 py-2">
						<NavLink to="/pricing">Pricing</NavLink>
					</li>
					<li className="px-4 py-2">
						<NavLink to="/product">Product</NavLink>
					</li>
					<li className="px-4 py-2">
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default PageNav;
