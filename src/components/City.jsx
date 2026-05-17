function City({ city }) {
	const { country, emoji, date } = city;

	function formatDate(isoString) {
		const date = new Date(isoString);
		return date.toLocaleDateString("en", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	}

	return (
		<li className="flex items-center justify-between bg-gray-600 p-3 rounded-md">
			<div className="flex items-center gap-4">
				<span>{emoji}</span>
				<span>{country}</span>
			</div>
			<span>{formatDate(date)}</span>
			<button>X</button>
		</li>
	);
}

export default City;
