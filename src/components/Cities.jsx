import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";

function Cities() {
	// const { cities } = useContext(CitiesContext);

	const { cities } = useCities();

	return (
		<ul className="space-y-3">
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}

export default Cities;
