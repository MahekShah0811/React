import React, { useState } from 'react'

const ChangeUser = () => {
   
     const [Data, setData] = useState({username : "Test_User" , role : "Tester" , photo : "https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?w=360"});

     function Change(){
        if (Data.username === "Test_User") {
            let new_obj = {...Data}
            console.log(new_obj);
            new_obj.photo = "https://img.freepik.com/free-vector/cute-cool-boy-dabbing-pose-cartoon-vector-icon-illustration-people-fashion-icon-concept-isolated_138676-5680.jpg?w=360"
            new_obj.username = "Devloper_User";
            new_obj.role = "Devloper";
            setData(new_obj);
        } else {
            let new_obj = {...Data}
            console.log(new_obj);
            new_obj.photo = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMTVfM2RfcmVuZGVyX2NoYXJhY3Rlcl9vZl9hX2JyaXRpc2hfc2hvcnRoYWlyX2tpdF9mNThkN2U2Ny05YTk1LTQ1MjEtOGYwMy1hODM3YmQ5MWY4ZmFfMS5wbmc.png"
            new_obj.username = "Test_User";
            new_obj.role = "Tester";
            setData(new_obj);
        }
     }
  return (
    <>
     <div className=' mx-auto mt-10  bg-[#222] rounded-xl w-full max-w-sm h-auto px-4 py-2 text-center text-2xl font-bold'>
        <img src={Data.photo} alt=""  className='w-36 h-36 object-cover rounded-full my-4 mx-auto'/>
        <h1 className='bg-[#555] w-full rounded-2xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.username} </h1>
        <h3  className='bg-[#555] w-full rounded-2xl px-4 py-2 active:bg-orange-400 select-none mb-2'>{Data.role}</h3>

        <button className='w-full bg-orange-500 px-4 py-2 my-2 rounded-xl font-bold hover:bg-orange-100 hover:text-orange-300 hover:scale-95 transition' onClick={Change}>Switch User</button>
     </div>
    </>
  )
}

export default ChangeUser