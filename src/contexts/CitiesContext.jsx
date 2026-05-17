import { createContext, useEffect, useState, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

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
		<CitiesContext.Provider value={{ cities, isLoading, error }}>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
	return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
