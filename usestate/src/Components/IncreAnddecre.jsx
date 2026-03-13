import React, { useState } from 'react'

const IncreAnddecre = () => {
    
  const [Number, setNumber] = useState(0);
  // Number (first variable) ==> Read Only value (You can't use this variable value)
  // setNumber (second variable) ==> Write Only value (If you want to change Number variable's value use setNumber)

  function IncreaseNum() {
     if(Number >= 0) return setNumber(Number+1);
  }

  function DecreaseNum() {
    if(Number > 0) return setNumber(Number-1);
  }

  // self task :
  // create btn jumps with gap = 5
  // decrease with 5
  // reset btn               

  function JumpFive() {
    if(Number >= 0) return setNumber(Number+5);
  }

  function DecFive() {
    if(Number-5 >= 0){
     setNumber(Number-5);
    }
    else{
      setNumber(0);
    }
  }

  function Reset() {
     setNumber (0);
  }
  
  return (
    <>
            <section>
        <h1 className='text-center text-3xl font-extrabold mt-10'>
          Usestate : Change Data (Variable ne defined karva mate ane value ne change karva mate)
        </h1>
        
        <p className='text-center text-2xl mt-5 font-bold'>
          Increase and Decrease Number
        </p>
        
        <div className='w-72 h-72 text-9xl font-bold px-4 py-2 bg-[#222] rounded-xl text-[#555] flex items-center justify-center mx-auto mt-8'>
          {Number}
        </div>
        
        <div className='flex items-center justify-center mt-5 gap-6'>
          <button className='bg-orange-700 px-8 py-4 rounded-xl active:scale-95 active:bg-[#555]' onClick={IncreaseNum}>
            Increase
          </button>
          
          <button className='bg-orange-700 px-8 py-4 rounded-xl active:scale-95 active:bg-[#555]' onClick={DecreaseNum}>
            Decrease
          </button>

          <button className='bg-orange-700 px-8 py-4 rounded-xl active:scale-95 active:bg-[#555]' onClick={JumpFive}>
            Increase 5
          </button>

          <button className='bg-orange-700 px-8 py-4 rounded-xl active:scale-95 active:bg-[#555]' onClick={DecFive}>
            Decrease 5
          </button>

          <button className='bg-orange-700 px-8 py-4 rounded-xl active:scale-95 active:bg-[#555]' onClick={Reset}>
            Reset
          </button>

        </div>
        </section>
    </>
  )
}

export default IncreAnddecre
