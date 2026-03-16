import { Mail, LockKeyholeIcon } from "lucide-react";
import { useState } from "react";

const LogIn = () => {

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function SubmitForm(){
    console.log("Data Send to Backend:", {
      "Email:":Email, 
      "Password":Password,
    });
    setEmail("");
    setPassword("");
  }
  
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <div className="bg-gray-200/50 shadow-2xl w-full max-w-sm p-2 h-auto rounded-t-4xl rounded-b-2xl">
          <form className="bg-white text-black text-center rounded-3xl px-8 py-6" onSubmit={(e) => {
            e.preventDefault();
            SubmitForm();
            }}>
            
            <img src="https://www.logoai.com/uploads/output/2025/02/08/562a52c054f32cd0c5b692d9f5fec756.jpg" alt="logo" className="w-84 h-24 object-cover my-6" />
            
            <h1 className="text-3xl font-semibold my-2">Sign in to continue</h1>
            
            <p className="text-gray-400 text-sm mb-6">
              please sign in to start your rental application
            </p>
            
            <div className="text-gray-700 rounded-xl my-2 bg-gray-300 w-full flex items-center px-3">
              <Mail className="w-5 h-5" />
              <input
                className="outline-none  w-full px-3 py-2"
                placeholder="Email"
                type="email"
                value={Email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            
            <div className="text-gray-700 rounded-xl my-2 bg-gray-300 w-full flex items-center px-3">
              <LockKeyholeIcon className="w-5 h-5" />
              <input
                className="outline-none  w-full px-3 py-2"
                placeholder="Password"
                type="password"
                value={Password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            
            <input
              className="bg-black text-white active:bg-black/50 active:text-black active:scale-95 px-4 py-2 w-full rounded-xl mt-4"
              type="submit"
              value="Sign In"
            />
          </form>
          
          <p className="py-3 text-center text-gray-400">
            Don't have an Account?{" "}
            <span className="font-semibold text-black">Sign Up</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default LogIn;
