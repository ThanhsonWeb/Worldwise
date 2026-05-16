import logo from "../assets/img/logo.png";
import { NavLink, Link } from "react-router-dom";

function PageNav() {
	return (
		<div className="flex items-center justify-around ">
			<Link to="/">
				<img src={logo} alt="logo" className="h-16" />
			</Link>
			<nav>
				<ul className="flex gap-5 text-2xl text-amber-50 ">
					<li className="p-3" >
						<NavLink to="/price">Price</NavLink>
					</li>
					<li className="p-3" >
						<NavLink to="/product">Product</NavLink>
					</li>
					<li className="p-3" >
						<NavLink to="/login">Login</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default PageNav;
