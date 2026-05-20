import ReactCountryFlag from "react-country-flag";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../../contexts/CitiesContext";
import { emojiToCountryCode, formatDate } from "../../utility/helper";
import BackButton from "../../ui/BackButton";
import Loading from "../../ui/Loading";

const BASE_URL = "http://localhost:8000";

function City() {
	const { id } = useParams();

	const { setCurrentCity, currentCity, setIsLoading } = useCities();

	console.log(currentCity);

	// fetch exact city by id
	useEffect(() => {
		async function getCity() {
			try {
				setIsLoading(true);
				const res = await fetch(`${BASE_URL}/cities/${id}`);
				if (!res.ok) throw new Error("City not found");
				const data = await res.json();
				setCurrentCity(data);
			} catch (err) {
				console.error(err.message);
			} finally {
				setIsLoading(false);
			}
		}
		getCity();
	}, [id, setCurrentCity, setIsLoading]);

	if (!currentCity) return <Loading />;
	const { cityName, emoji, date } = currentCity;
	return (
		<div className="p-5 bg-gray-700 text-gray-100 rounded-lg space-y-4">
			{/* 1 */}
			<div>
				<h6 className="text-xs uppercase text-gray-400">City name</h6>
				<h3 className="text-xl font-semibold flex gap-4">
					<span>
						<ReactCountryFlag countryCode={emojiToCountryCode(emoji)} svg />
					</span>
					<span>{cityName}</span>
				</h3>
			</div>

			{/* 2 */}
			<div>
				<h6 className="text-xs uppercase text-gray-400">
					You went to {cityName} on
				</h6>
				<span className="text-sm">{formatDate(date)}</span>
			</div>

			{/* 3 */}
			<div>
				<h6 className="text-xs uppercase text-gray-400">Learn more</h6>
				<a
					href={`https://en.wikipedia.org/wiki/${cityName}`}
					target="_blank"
					rel="noreferrer"
					className="text-orange-300 underline"
				>
					Check out {cityName} on Wikipedia →
				</a>
			</div>

			<BackButton />
		</div>
	);
}

export default City;
