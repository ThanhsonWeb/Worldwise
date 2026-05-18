import ReactCountryFlag from "react-country-flag";
import { emojiToCountryCode } from "../../utility/helper";

function CountryItem({ city }) {
	const { country, emoji } = city;

	return (
		<div>
			<li className="bg-gray-600 p-3 text-xl flex items-center gap-5 rounded-2xl">
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

export default CountryItem;
