import { createContext, useEffect, useState, useContext } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
	const [cities, setCities] = useState([]);
	useEffect(() => {
		async function fetchCities() {
			try {
				const res = await fetch("http://localhost:8000/cities");
				const data = await res.json();
				setCities(data);
			} catch (error) {
				console.error(error.message);
			}
		}
		fetchCities();
	}, []);

	return (
		<CitiesContext.Provider value={{ cities }}>
			{children}
		</CitiesContext.Provider>
	);
}

function useCities() {
	return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
