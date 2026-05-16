import { cities } from "../../data/cities.json";
import City from "./City";

function Cities() {
	return (
		<div>
			<ul>
				{cities.map((city) => (
					<City key={city.id} city={city} />
				))}
			</ul>
		</div>
	);
}

export default Cities;
