import {
	createContext,
	useEffect,
	useState,
	useContext,
	useCallback,
} from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:8000";

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [currentCity, setCurrentCity] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const [emptyCity, setEmptyCity] = useState(false);

	// Delete city in json server
	const onDeleteCity = useCallback(
		async (id) => {
			try {
				setIsLoading(true);
				await fetch(`${BASE_URL}/cities/${id}`, { method: "DELETE" });
				setCities((cities) => cities.filter((city) => city.id !== id));
				if (currentCity?.id === id) setCurrentCity(null);
			} catch (err) {
				console.error(err.message);
			} finally {
				setIsLoading(false);
			}
		},
		[currentCity],
	);

	// createCity in json server
	//onAddCity is an event handler — it should only run when the user submits the form or clicks a button.
	async function onAddCity(newCity) {
		try {
			setIsLoading(true);
			const res = await fetch(`${BASE_URL}/cities`, {
				method: "POST", // "POST" is for send or create to server
				body: JSON.stringify(newCity), // server need string not object
				headers: { "Content-Type": "application/json" }, // tell the server "this is JSON data"
			});
			const data = await res.json();
			setCities((cities) => [...cities, data]);
			console.log(data);
		} catch (err) {
			console.error(err.message);
		} finally {
			setIsLoading(false);
		}
	}

	// fetch cities
	useEffect(() => {
		async function fetchCities() {
			try {
				setIsLoading(true);
				const res = await fetch("http://localhost:8000/cities");
				const data = await res.json();
				setCities(data);
			} catch (error) {
				// console.error(error.message);
				setError(error.message);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);

	return (
		<CitiesContext.Provider
			value={{
				cities,
				isLoading,
				error,
				currentCity,
				emptyCity,
				setEmptyCity,
				setIsLoading,
				setCurrentCity,
				onDeleteCity,
				onAddCity,
			}}
		>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
	const context = useContext(CitiesContext);
	if (context === undefined) {
		throw new Error("useCities must be used within a CitiesProvider");
	}
	return context;
}

export { CitiesProvider, useCities };
