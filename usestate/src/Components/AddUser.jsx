import React from 'react'
import { useState } from 'react'

const AddUser = () => {

    const [Data, setData] = useState([{name: "Aarav Patel", email: "aaravpatel@gmail.com", color:"bg-yellow-400"},
                                    {name: "Riya Sharma", email: "riyasharma@gmail.com",  color:"bg-cyan-400"},
                                    {name: "Vivaan Maheta", email: "vivaanmaheta@gmail.com",  color:"bg-purple-400"}
    ]);

    function Add() {
        let arr = [...Data];
        arr.push({name: "Ananya Gupta", email: "ananyagupta@gmail.com", color: "bg-pink-400"});
            if (Data.some(user => user.name === "Ananya Gupta")) {
                return alert("User Exists !!!");
            }
        setData(arr);
    }

    // Task :
    // btn that add two user

    function AddTwo() {
    let arr = [...Data];
    arr.push({ name: "Mahek Shah", email: "mahekshah@gmail.com", color: "bg-lime-400" },
            { name: "Ritika Patel", email: "ritikapatel@gmail.com", color: "bg-indigo-400" });
        if (Data.some(user => user.name === "Mahek Shah") || Data.some(user => user.name === "Ritika Patel")) {
            return alert("User Exists !!!");
        }
        setData(arr);
    }

  return (
    <>
      <section className='flex flex-wrap justify-center items-center gap-6 my-10'>
        
        {Data.map((user) => {
            return (
                <div className={`w-full h-auto max-w-sm rounded-xl p-6 text-center font-bold text-2xl ${user.color} flex justify-center items-center flex-col gap-2`}>
                
                    <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>
                        {user.name}
                    </h1>
                    
                    <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>
                        {user.email}
                    </h1>
                
                </div>
            )
        })}

      </section>

      <div className='flex justify-center items-center'>
        <button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all'
        onClick={Add}>
            Add One More User
        </button>

        <button className='bg-orange-600 text-center px-6 py-4 ml-20 active:bg-orange-100 active:scale-95 active:text-orange-600 text-2xl font-bold rounded-xl transition-all'
        onClick={AddTwo}>
            Add Two More User
        </button>

      </div>
    </>
  )
}

export default AddUser
