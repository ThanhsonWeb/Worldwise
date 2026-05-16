import img from "../assets/img/img-1.jpg";
import PageNav from "../components/PageNav";

function Product() {
  return (
    <div className="h-[calc(100vh-5rem)] m-6 px-[5rem] py-[2.5rem] bg-gray-800 text-white">
      <PageNav />

      <div className="flex flex-col md:flex-row items-center gap-10 mt-10">
        <img
          src={img}
          alt="City view"
          className="w-full md:w-1/2 rounded-lg  object-cover"
        />

        <div className="md:w-1/2 space-y-4">
          <h2 className="text-3xl font-bold mb-2">About WorldWide</h2>
          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="text-gray-300 leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
