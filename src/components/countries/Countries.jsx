import { useCities } from "../../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import EmptyCountry from "./EmptyCountry";

function Countries() {
	const { cities } = useCities();

	if (cities.length === 0) return <EmptyCountry />;
	return (
		<ul className="grid md:grid-cols-2 grid-cols-1 gap-5 text-white">
			{cities.map((city) => (
				<CountryItem city={city} key={city.id} />
			))}
		</ul>
	);
}

export default Countries;
