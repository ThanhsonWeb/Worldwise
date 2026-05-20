import BackButton from "../ui/BackButton";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { UseUrlPosition } from "../hooks/useUrlPostion";
import ReactCountryFlag from "react-country-flag";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BASE_URLl = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function emojiFromCountryCode(code) {
	return String.fromCodePoint(
		...[...code.toUpperCase()].map((c) => 127397 + c.charCodeAt()),
	);
}

function Form() {
	const { onAddCity, setEmptyCity, emptyCity } = useCities();
	const { lat, lng } = UseUrlPosition();
	const [cityName, setCityName] = useState("");
	const [emoji, setEmoji] = useState("");
	const [date, setDate] = useState(new Date());
	const [notes, setNotes] = useState("");
	const [country, setCountry] = useState("");

	const navigate = useNavigate();

	useEffect(() => {
		if (!lat || !lng) return;

		async function fetchCity() {
			try {
				const res = await fetch(
					`${BASE_URLl}?latitude=${lat}&longitude=${lng}`,
				);
				if (!res.ok)
					throw new Error("Something went wrong while fetching data");
				const dataCity = await res.json();
				if (!dataCity.city || !dataCity.countryName) {
					setEmptyCity(true);
				} else {
					setEmptyCity(false);
					console.log(dataCity);
					setCountry(dataCity.country);
					setCityName(dataCity.city);
					setEmoji(dataCity.countryCode);
				}
			} catch (err) {
				console.error(err.message);
				setEmptyCity(true);
			}
		}
		fetchCity();
	}, [lat, lng, setEmptyCity]);

	function handleAddCity(e) {
		e.preventDefault();
		if (!cityName || !date) return;
		const newCity = {
			// json-server will create the 'id' automatically
			emoji: emojiFromCountryCode(emoji),
			cityName,
			country,
			date,
			notes,
			position: { lat, lng },
		};
		onAddCity(newCity);
		navigate("/app/cities");
	}

	if (emptyCity)
		return (
			<h2 className="text-2xl text-white mt-10">
				This is not a City bro 🤔🍃🍃
			</h2>
		);

	return (
		<form
			onSubmit={handleAddCity}
			className="bg-gray-700 text-gray-100 p-6 rounded-lg space-y-3 w-[22rem] "
		>
			{/* City name */}
			<div>
				<label className="block text-sm text-gray-300 mb-1">City name</label>
				<div className="flex items-center gap-2 relative">
					<input
						type="text"
						value={cityName}
						onChange={(e) => setCityName(e.target.value)}
						className="flex-1 px-3 py-1 rounded-md bg-gray-100 text-gray-800 "
					/>

					<span className="absolute right-2">
						<ReactCountryFlag
							countryCode={emoji}
							svg
							style={{ fontSize: "1.7rem" }}
						/>
					</span>
				</div>
			</div>

			{/* Date */}
			<div>
				<label className="block text-sm text-gray-300 mb-1">
					When did you go to ....?
				</label>

				<DatePicker
					selected={date}
					onChange={(newDate) => setDate(newDate)}
					dateFormat="dd/MM/yyyy"
					className=" px-3 py-1 rounded-md bg-gray-100 text-gray-800"
				/>
			</div>

			{/* Notes */}
			<div>
				<label className="block text-sm text-gray-300 mb-1">
					Notes about your trip to ...
				</label>
				<textarea
					rows="2"
					value={notes}
					onChange={(e) => setNotes(e.target.value)}
					className="w-full p-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
				></textarea>
			</div>

			<div className="flex justify-between ">
				<Button type="submit">Add</Button>
				<BackButton />
			</div>
		</form>
	);
}

export default Form;
