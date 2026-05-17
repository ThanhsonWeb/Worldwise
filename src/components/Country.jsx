import ReactCountryFlag from "react-country-flag";

function Country({ city }) {
	const { country, emoji } = city;
	function emojiToCountryCode(emoji) {
		if (!emoji) return "";
		const codePoints = [...emoji].map((char) => char.codePointAt(0));
		return codePoints
			.map((cp) => String.fromCharCode(cp - 127397)) // regional indicator offset
			.join("");
	}
	return (
		<div>
			<li className="bg-gray-500 p-3 text-xl flex items-center gap-5 rounded-2xl">
				<span>
					<ReactCountryFlag
						countryCode={emojiToCountryCode(emoji)}
						svg
						style={{ fontSize: "2rem" }}
					/>
				</span>
				<span>{country}</span>
			</li>
		</div>
	);
}

export default Country;
