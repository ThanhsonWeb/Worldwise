import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
	return (
		<div className="flex p-10  h-screen ">
			<Sidebar />
			<Map />
		</div>
	);
}

export default AppLayout;
