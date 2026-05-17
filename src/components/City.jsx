import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useCities } from "../contexts/CitiesContext";
function City() {
	const { id } = useParams();

	const { setCurrentCity, currentCity } = useCities();

	console.log(currentCity);

	// fetch exact city by id
	useEffect(() => {
		async function getCity() {
			const res = await fetch(`http://localhost:8000/cities/${id}`);
			const data = await res.json();
			setCurrentCity(data);
		}
		getCity();
	}, [id, setCurrentCity]);

	if (!currentCity) return <p>Loading city...</p>;
	const { cityName, emoji, date } = currentCity;
	return (
		<div className="p-5 bg-gray-700 text-gray-100 rounded-lg space-y-4">
			{/* 1 */}
			<div>
				<h6 className="text-xs uppercase text-gray-400">City name</h6>
				<h3 className="text-xl font-semibold">
					<span>{emoji}</span> {cityName}
				</h3>
			</div>

			{/* 2 */}
			<div>
				<h6 className="text-xs uppercase text-gray-400">
					You went to {cityName} on
				</h6>
				<span className="text-sm">{date}</span>
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
		</div>
	);
}

export default City;
