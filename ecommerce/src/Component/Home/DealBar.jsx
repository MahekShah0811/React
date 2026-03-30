import React, { useEffect, useState } from "react";
import DealCard from "../../ui/DealCard";
import axios from "axios";
import { Link } from "react-router-dom";

const DealBar = () => {
  const [deal, setDeal] = useState([]);

  useEffect(() => {
    const fetchDeal = async () => {
      try {
        let response = await axios.get(
          "https://dummyjson.com/products?limit=10&skip=5",
        );
        console.log(response.data.products);
        setDeal(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDeal();
  }, []);

  return (
    <>
      <section className="px-10 w-[92%] mx-auto">
        <div className="flex flex-col  justify-between my-6">
          <h3 className="text-lg md:text-xl text-gray-400 font-semibold max-md:text-center">Today Deals</h3>
          <div className="my-6 flex items-center justify-between">
            <h1 className="text-2xl md:text-4xl font-semibold md:py-2 text-nowrap max-md:text-center">Deals Of the Day</h1>
            <span className="text-xl text-gray-900">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              dolor sit, amet consectetur adipisicing.
            </span>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 my-6">
          {deal.map((data) => {
            return (
              <Link to={`/product/${data.id}`} key={data.id}>
                <DealCard productData={data} />
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default DealBar;
 