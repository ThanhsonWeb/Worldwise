import { useParams } from "react-router-dom";

function City() {
	const { id } = useParams();

	return (
		<div>
			<h1>City {id}</h1>
		</div>
	);
}

export default City;
