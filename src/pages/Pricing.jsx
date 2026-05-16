import img from "../assets/img/img-2.jpg";
import PageNav from "../components/PageNav";

function Pricing() {
  return (
    <div className="h-[calc(100vh-5rem)] m-6 px-[5rem] py-[2.5rem] bg-gray-800 text-white">
      <PageNav />

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold mb-2">
            Simple pricing. Just $9/month.
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>

        <img
          src={img}
          alt="City view"
          className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Pricing;
