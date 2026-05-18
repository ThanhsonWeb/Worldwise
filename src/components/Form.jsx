import BackButton from "../ui/BackButton";
import { useState } from "react";
import Button from "../ui/Button";
function Form() {
	const [cityName, setCityName] = useState("");

	return (
		<form className="bg-gray-700 text-gray-100 p-6 rounded-lg space-y-3 w-[22rem] ">
			{/* City name */}
			<div>
				<label className="block text-sm text-gray-300 mb-1">City name</label>
				<div className="flex items-center gap-2">
					<input
						type="text"
						value={cityName}
						onChange={(e) => setCityName(e.target.value)}
						className="flex-1 px-3 py-1 rounded-md bg-gray-100 text-gray-800 "
					/>
				</div>
			</div>

			{/* Date */}
			<div>
				<label className="block text-sm text-gray-300 mb-1">
					When did you go to ....?
				</label>
				<input
					type="text"
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
					className="w-full p-2 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
				></textarea>
			</div>

			<div className="flex justify-between " >
				<Button >Add</Button>
				<BackButton />
			</div>
		</form>
	);
}

export default Form;
