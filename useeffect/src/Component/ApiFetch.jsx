import React, { useState } from 'react'

const ApiFetch = () => {

    const [Data1, setData1] = useState([]);

  // Method-1
    function Method1(){
        fetch("https://jsonplaceholder.typicode.com/users") // promise
        .then((rawdata) => {
            console.log(rawdata); // response
            return rawdata.json(); // converting into json
        })
        .then((data) => {
            console.log(data); // final data
            return setData1(data)
        })
        // .catch()
    }

  // Method-2
  // Method-3
  

  return (
    <>
      {/* Method-1 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 bg-pink-100 '>
            <h1 className='text-center text-3xl font-bold'>
                Method-1 : fetch - then - then - catch
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '></div>

            <button className='w-36 px-4 py-2 text-center text-white bg-pink-950 rounded-md text-xl font-bold active:bg-pink-950/70 active:text-black active:scale-95'
            onClick={Method1}>
                Get Data-1
            </button>
      </section>


         {/* Method-2 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 bg-green-100 '>
            <h1 className='text-center text-3xl font-bold'> 
                Method-2 : Async - Await - Fetch
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '></div>

            <button className='w-36 px-4 py-2 text-center text-white bg-green-950 rounded-md text-xl font-bold active:bg-green-950/70 active:text-black active:scale-95'
            >
                Get Data-2
            </button>
      </section>

      {/* Method-3 */}
      <section className='w-full h-screen flex flex-col items-center justify-center gap-y-4  p-6 bg-orange-100 '>
            <h1 className='text-center text-3xl font-bold'> 
                Method-3 : Async - Await - Axios
            </h1>

            <div className='bg-black p-4 w-full rounded-md overflow-auto h-144 '></div>

            <button className='w-36 px-4 py-2 text-center text-white bg-orange-700 rounded-md text-xl font-bold active:bg-orange-700/70 active:text-black active:scale-95'
           >
                Get Data-3
            </button>
      </section>
    </>
  )
}

export default ApiFetch
