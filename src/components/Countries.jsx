import { cities } from "../../data/cities.json";
import Country from "./Country";

function Countries() {
	return (
		<ul className="grid md:grid-cols-2 grid-cols-1 gap-5">
			{cities.map((city) => (
				<Country city={city} key={city.id} />
			))}
		</ul>
	);
}

export default Countries;
