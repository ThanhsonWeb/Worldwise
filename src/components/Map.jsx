import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
function Map() {
	const [mapPosition] = useState([40, 0]);
	// b1 take cities
	const { cities } = useCities();

	return (
		<div className="h-full  flex-1">
			<MapContainer
				center={mapPosition}
				zoom={6}
				scrollWheelZoom={true}
				className="h-full w-full rounded-lg"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
				/>
				{/* b2 : render each city in cities */}
				{cities.map((city) => (
					<Marker
						position={[city.position.lat, city.position.lng]}
						key={city.id}
					>
						<Popup>
							<span>{city.emoji}</span> <span>{city.cityName}</span>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}

export default Map;
