import ReactCountryFlag from "react-country-flag";

function City({ city }) {
	const { country, emoji, date } = city;

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

	return (
		<li className="flex items-center justify-between bg-gray-600 p-3 rounded-md">
			<div className="flex items-center gap-4">
				<ReactCountryFlag countryCode={emojiToCountryCode(emoji)} svg />
				<span>{country}</span>
			</div>
			<span>{formatDate(date)}</span>
			<button>X</button>
		</li>
	);
}

export default City;
