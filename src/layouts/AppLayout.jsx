import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
	return (
		<div className="md:flex md:p-10  h-screen relative ">
			<Sidebar />
			<Map />
			<User />
		</div>
	);
}

export default AppLayout;
