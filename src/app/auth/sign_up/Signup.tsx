"use client";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function SignUp() {
  const handleSignUp = () => {
    const emailInput = document.getElementById("email") as HTMLInputElement;
    const email = emailInput.value;

   
    if(email){
      localStorage.setItem("email", email)
      toast.success("✅ Email saved successfully!");
       emailInput.value = "";
    }else{
      toast.error("❌ Please enter a valid email.");
    }
  };

  useEffect(() => {
    const email = localStorage.getItem("email") || "";
    const emailInput = document.getElementById("email") as HTMLInputElement;
    if (emailInput) emailInput.value = email;
  }, []);

  return (
    <div className="flex justify-center bg-white py-12">
        <ToastContainer position="top-center" autoClose={3000} />
      <div className="text-center max-w-md">
        <h3 className="text-3xl mb-4">Join BoxCar</h3>
        <p className="text-gray-600 mb-6">Receive pricing updates, shopping tips & more!</p>
        <div>
          <input id="email" type="email" placeholder="Your email address" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          <button onClick={handleSignUp} className="px-6 py-3 mt-5 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700 transition">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
