import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { emojiToCountryCode } from "../utility/helper";
import ReactCountryFlag from "react-country-flag";

function Map() {
	const navigate = useNavigate();
	const [mapPosition] = useState([40, 0]);

	const [searchParams] = useSearchParams();

	const { cities } = useCities();
	console.log(cities);

	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");

	return (
		<div
			onClick={() => navigate("form")}
			className="flex-1  overflow-hidden h-screen"
		>
			<MapContainer
				center={mapPosition}
				zoom={13}
				scrollWheelZoom={true}
				className="h-full w-full rounded-lg"
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{cities.map((city) => (
					<Marker
						key={city.id}
						position={[city.position.lat, city.position.lng]}
					>
						<Popup>
							<div className="flex gap-2 items-center p-3">
								<ReactCountryFlag
									countryCode={emojiToCountryCode(city.emoji)}
									svg style={{fontSize : "1.2rem" }}
								/>
								<span className="font-semibold">{city.cityName}</span>
							</div>
						</Popup>
					</Marker>
				))}
			</MapContainer>
		</div>
	);
}

export default Map;
