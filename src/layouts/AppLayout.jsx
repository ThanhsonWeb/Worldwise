import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
	return (
		<div className="flex items-center  h-screen  overflow-hidden relative">
			<Sidebar />
			<Map />
		</div>
	);
}

export default AppLayout;
