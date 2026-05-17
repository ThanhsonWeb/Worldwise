import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";

function Countries() {
	const { cities } = useCities();

	return (
		<ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
			{cities.map((city) => (
				<CountryItem city={city} key={city.id} />
			))}
		</ul>
	);
}

export default Countries;
