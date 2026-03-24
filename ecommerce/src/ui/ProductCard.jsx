import { ArrowUpRight } from "lucide-react";

const ProductCard = ({ product_data }) => {
  return (
    <>
      <div className="card bg-[#b08968] border-5 border-[#5f3d26] rounded-4xl p-2 w-full max-w-sm overflow-hidden shadow-2xl relative transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <img
          src={product_data.images[0]}
          alt="producat image"
          className="w-full h-84 object-cover bg-white/70 rounded-3xl"
        />

        <div className="content px-4 py-3">
          <p className="font-bold text-xl text-[#5f3d26] mb-2 capitalize">
            {product_data.category}
          </p>
          <h1 className="font-semibold text-lg text-white mb-2 ">
            {product_data.title}
          </h1>
          <p className="text-white/70 font-medium mb-8 text-md h-26">
            {product_data.description}
          </p>

          <div className="price flex items-center justify-between py-2">
            <h1 className="rounded-full bg-gray-200 px-3 py-1 font-bold">
              $ {product_data.price}
            </h1>
            <div className="flex items-center justify-between bg-[#ede0d4] text-[#7f5539] font-bold rounded-full p-1 gap-2">
              <button className="ml-2">Buy Now </button>
              <ArrowUpRight className="p-0.5 bg-[#7f5539] text-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
 