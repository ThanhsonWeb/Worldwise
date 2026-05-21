import PageNav from "../components/PageNav";
import LinkButton from "../ui/LinkButton";

function HomePage() {
	return (
		<div className="homepage text-center m-6 px-[5rem] py-[2.5rem] text-white  ">
			<PageNav />
			<h1 className="text-5xl font-semibold my-[2rem]">
				You travel the world.
				<br />
				WorldWise keeps track of your adventures.
			</h1>
			<h2 className="text-2xl font-semibold text-stone-300 mb-10">
				A world map that tracks your footsteps into every city you can think of.
				Never forget your wonderful experiences, and show your friends how you
				have wandered the world.
			</h2>

			<LinkButton to="/login">Start Tracking Now</LinkButton>
		</div>
	);
}

export default HomePage;
