import React, { useState } from 'react'
import axios from "axios";

const ApiFetch = () => {

    const [Data1, setData1] = useState([]);
    const [Data2, setData2] = useState([]);
    const [Data3, setData3] = useState([]);

  // Method-1
    function Method1(){
        fetch("https://jsonplaceholder.typicode.com/users") // promise
        .then((rawdata) => {
            // console.log(rawdata); // response
            return rawdata.json(); // converting into json
        })
        .then((data) => {
            // console.log(data); // final data
            return setData1(data)
        })
        .catch((e) => {
            console.error(e);
        });
    }

  // Method-2
   let Method2 = async () => {
      try {
        let response = await fetch("https://dummyjson.com/products?limit=10");
        let data = await response.json();
        console.log(data.products);
        return setData2(data.products);
      } catch (error) {
        console.error(error);
      }
    };

  // Method-3
    let Method3 = async () => {
        let response  = await axios.get("https://dummyjson.com/recipes?limit=10");
        console.log(response.data.recipes);
        setData3(response.data.recipes);
        // HTTPS Methods:
        // GET -> recieve data only
        // POST -> send data only
        // PATCH -> updata data
        // PUT -> updata data
        // DELETE -> delete data
    };
  

  return (
    <>
      {/* Method-1 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-pink-100'>
            <h1 className='text-center text-3xl font-bold'>
                Method-1 : fetch - then - then - catch
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4'>
                {Data1.map((user, id) => {
                    return(
                        <div className='bg-[#222] rounded-md w-84 p-2 text-xl' key={id}>
                            <h1>
                                <span className='font-bold'>Name : </span>
                                {user.name}
                            </h1>

                            <h1>
                                <span className='font-bold'>Email : </span>
                                {user.email}
                            </h1>
                            <h1>
                                <span className='font-bold'>Website : </span>
                                {user.website}
                            </h1>
                        </div>
                    )
                })}
            </div>

            <button className='w-36 px-4 py-2 text-center text-white bg-pink-950 rounded-md text-xl font-bold active:bg-pink-950/70 active:text-black active:scale-95'
            onClick={Method1}>
                Get Data-1
            </button>
      </section>


         {/* Method-2 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-green-100'>
            <h1 className='text-center text-3xl font-bold'> 
                Method-2 : Async - Await - Fetch
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-10'>
                {Data2.map((pro, id) => {
                    return(
                        <div key={id}>
                            <div className="card w-full h-auto max-w-md bg-white/30 rounded-[10%] p-2 text-white">
                                <div className="bg-white text-center rounded-b-[12%] rounded-[10%] overflow-hidden">
                                    <img src={pro.images[0]} 
                                        alt="img"
                                        className="w-full rounded-[10%]"
                                    />
                                </div>
                                <div className="content px-4 py-3 flex justify-between items-center gap-4">
                                    <div className="details min-w-0 flex-1">
                                        <h2 className="text-white text-lg font-bold truncate">
                                            {pro.title}
                                        </h2>
                                    </div>

                                    <div className="price border-l-2 border-gray-500 pl-4 flex-shrink-0">
                                        <h2 className="text-xl font-bold text-white">
                                            {pro.price} $
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded-md text-xl font-bold active:bg-green-950/70 active:text-black active:scale-95'
            onClick={Method2}>
                Get Data-2
            </button>
      </section>

      {/* Method-3 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4 p-6 bg-orange-100'>
            <h1 className='text-center text-3xl font-bold'> 
                Method-3 : Async - Await - Axios
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 text-white flex flex-wrap items-center justify-center gap-4'>
                {Data3.map((rec, id) => {
                    return(
                        <div key={id} className='bg-white/80 w-64 p-2 rounded-xl shadow-2xl border-2 border-white'>
                            <img src={rec.image} alt="img" className='rounded-xl border-2 border-black'/>
                            <div className='text-center font-bold bg-gray-500 my-1 mt-3 rounded-xl border-2 border-black'>
                                <h1>{rec.name}</h1>
                                <h1 className='text-sm'>Ratings : {rec.rating} / 5.0</h1>
                            </div>
                        </div>
                    )
                })}
            </div>

            <button className='w-36 px-4 py-2 text-center text-white bg-orange-700 rounded-md text-xl font-bold active:bg-orange-700/70 active:text-black active:scale-95'
           onClick={Method3}>
                Get Data-3
            </button>
      </section>
    </>
  )
}

export default ApiFetch
