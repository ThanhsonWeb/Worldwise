import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState } from "react";

function Map() {
	const navigate = useNavigate();
	const [mapPosition, setMapPosition] = useState([40, 0]);

	const [searchParams] = useSearchParams();

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div onClick={() => navigate("form")} className="flex-1  overflow-hidden">
			<MapContainer
				center={mapPosition}
				zoom={13}
				scrollWheelZoom={false}
				className="h-[100%]"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={mapPosition}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
}

export default Map;
