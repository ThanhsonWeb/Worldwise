import { useCities } from "../contexts/CitiesContext";
import Loading from "../ui/Loading";
import Error from "../ui/Error";
import CityItem from "./CityItem";

function Cities() {
	// const { cities } = useContext(CitiesContext);

	const { cities, isLoading, error } = useCities();

	if (error) return <Error message={error} />;

	if (isLoading) return <Loading />;

	return (
		<ul className="space-y-3">
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}

export default Cities;
