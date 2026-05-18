import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
	return (
		<div className="flex  m-6 h-[100vh]  ">
			<Sidebar />
			<Map />
		</div>
	);
}

export default AppLayout;
