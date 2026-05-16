import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

function AppLayout() {
	return (
		<div className="flex  m-6 h-[calc(100vh-2rem)] bg-white ">
			<Sidebar />
			
			<Map />
		</div>
	);
}

export default AppLayout;
