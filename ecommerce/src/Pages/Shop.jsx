import React, { useEffect, useState } from 'react'
import { SearchIcon } from "lucide-react"
import ProductCard from '../ui/ProductCard'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Shop = () => {

    const [products, setProducts] = useState([]);

    const params = useParams();
    console.log(params.collection);

    useEffect(() => {
        const FetchAllProducts = async () => {
           if (params.collection) {
                 try {
                let response = await axios.get(`https://dummyjson.com/products/category/${params.collection}`);
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.error(error);
            }
           } else {
                 try {
                let response = await axios.get(`https://dummyjson.com/products`);
                console.log(response.data.products);
                setProducts(response.data.products);
            } catch (error) {
                console.error(error);
            }
           }
        }
        FetchAllProducts();
    }, []);
    
  return (
    <>
        <section>
            {/* Title Bar */}
            <div className='bg-gray-100 w-full py-10 text-center'>
                <h1 className='text-5xl font-medium py-4'>Shop</h1>
                <p className='text-lg font-normal text-gray-500'>Home / Shop</p>
            </div>

            {/* Filters ans Products */}
            <div className='py-10 '>
                {/* Filter and Search */}
                <div className='flex items-center justify-center gap-5'>
                    {/* Search Bar */}
                    <div className='w-3/4 flex items-center border border-red-950 px-6 py-4 gap-3 rounded-full'>
                        <SearchIcon />
                        <input type="text" placeholder='Search Products...' className='outline-none text-md w-full'/>
                    </div>

                    {/* Filter */}
                    <div className='1/4 bg-red-950 text-white px-4 py-4 rounded-2xl'>
                        <select>
                            <option className='bg-red-950 text-white w-full my-3 rounded-2xl'>Default</option>
                            <option className='bg-red-950 text-white w-full my-3 rounded-2xl' value="">A to Z</option>
                            <option className='bg-red-950 text-white w-full my-3 rounded-2xl' value="">Z to A</option>
                        </select>
                    </div>
                </div>

                {/* Product */}
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8'>
                        {products.map((data) => {
                            return(
                                <Link to={`product/${data.id}`} key={data.id}>  
                                <ProductCard product_data={data}/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Shop