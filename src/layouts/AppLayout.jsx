import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import User from "../components/User";

function AppLayout() {
	return (
		<div className="flex p-10  h-screen relative ">
			<Sidebar />
			<Map />
			<User />
		</div>
	);
}

export default AppLayout;
