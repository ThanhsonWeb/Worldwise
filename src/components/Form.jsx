import BackButton from "../ui/BackButton";
import { useState, useEffect } from "react";
import Button from "../ui/Button";
import { UseUrlPosition } from "../hooks/useUrlPostion";
import ReactCountryFlag from "react-country-flag";
import { formatDate } from "../utility/helper";

function Form() {
	const [cityName, setCityName] = useState("");
	const [emoji, setEmoji] = useState("");
	const [date, setDate] = useState(new Date());
	const [notes, setNotes] = useState("");

	const { lat, lng } = UseUrlPosition();

	// fetch exact city by lat and lng
	const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

	useEffect(() => {
		async function fetchCity() {
			try {
				const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);
				const data = await res.json();
				console.log(data);
				setCityName(data.city);
				setEmoji(data.countryCode);
			} catch (err) {
				console.error(err.message);
			}
		}
		fetchCity();
	}, [lat, lng]);

	return (
		<form className="bg-gray-700 text-gray-100 p-6 rounded-lg space-y-3 w-[22rem] ">
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
				<input
					type="date"
					value={formatDate(date)}
					className="w-full px-3 py-1 rounded-md bg-gray-100 text-gray-800 "
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
				<Button>Add</Button>
				<BackButton />
			</div>
		</form>
	);
}

export default Form;
