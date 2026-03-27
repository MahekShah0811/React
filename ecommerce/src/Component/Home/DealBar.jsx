import React, { useEffect, useState } from 'react'
import DealCard from '../../ui/DealCard'
import axios from "axios"
import { Link } from 'react-router-dom';

const DealBar = () => {

  const [deal, setDeal] = useState([]);

  useEffect(() => {
    const fetchDeal = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products?limit=10&skip=5");
        setDeal(response.data.products);
        console.log(deal);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDeal();
  }, []);

  return (
    <>
        <section className='px-10 overflow-x-auto w-[80%] mx-auto'>
            <div className='flex gap-6 w-full'>
              {deal.map((data) => {
                return (
                  <Link to={'/product/${data.id}'} key={data.id}>
                    <DealCard productData={data}/>
                  </Link>
                );
              })}
            </div>
        </section>
    </>
  )
}

export default DealBar