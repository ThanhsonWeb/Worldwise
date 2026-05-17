import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function CityItem({ city }) {
	const { emoji, date, cityName, id } = city;

	const { onDeleteCity } = useCities();

	function formatDate(isoString) {
		const date = new Date(isoString);
		return date.toLocaleDateString("en", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	}
	function emojiToCountryCode(emoji) {
		if (!emoji) return "";
		const codePoints = [...emoji].map((char) => char.codePointAt(0));
		return codePoints
			.map((cp) => String.fromCharCode(cp - 127397)) // regional indicator offset
			.join("");
	}

	function handleDelete(e) {
		e.preventDefault();
		onDeleteCity(id);
	}

	return (
		<Link to={`${id}`}>
			<li className="flex items-center justify-between bg-gray-600 p-3 rounded-md mb-3">
				<div className="flex items-center gap-4">
					<ReactCountryFlag countryCode={emojiToCountryCode(emoji)} svg />
					<span>{cityName}</span>
				</div>
				<div className="flex gap-7">
					<span>{formatDate(date)}</span>
					<button className="px-2 rounded-full bg-red-500" onClick={handleDelete}>x</button>
				</div>
			</li>
		</Link>
	);
}

export default CityItem;
