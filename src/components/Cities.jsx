import { cities } from "../../data/cities.json";
import City from "./City";

function Cities() {
	return (
		<ul className="space-y-3">
			{cities.map((city) => (
				<City key={city.id} city={city} />
			))}
		</ul>
	);
}

export default Cities;
