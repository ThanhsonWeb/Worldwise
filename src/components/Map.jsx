import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import {
	MapContainer,
	TileLayer,
	Popup,
	Marker,
	useMapEvent,
	useMap,
} from "react-leaflet";
import { useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { emojiToCountryCode } from "../utility/helper";
import ReactCountryFlag from "react-country-flag";
import { UseUrlPosition } from "../hooks/useUrlPostion";

function Map() {
	const [mapPosition, setMapPosition] = useState([40, 0]);

	const { cities } = useCities();
	// use custom hook
	const [lat, lng] = UseUrlPosition();
	console.log(lat, lng);

	useEffect(() => {
		if (lat && lng) {
			setMapPosition([lat, lng]);
		}
	}, [lat, lng]);

	return (
		<div className="flex-1  overflow-hidden h-screen">
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
									svg
									style={{ fontSize: "1.2rem" }}
								/>
								<span className="font-semibold">{city.cityName}</span>
							</div>
						</Popup>
					</Marker>
				))}
				<DetectClick />
				<ChangeCenter mapPosition={mapPosition} />
			</MapContainer>
		</div>
	);
}

function DetectClick() {
	const navigate = useNavigate();
	useMapEvent({
		click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
	});
}

function ChangeCenter({ mapPosition }) {
	const map = useMap();
	map.setView(mapPosition);
}

export default Map;
