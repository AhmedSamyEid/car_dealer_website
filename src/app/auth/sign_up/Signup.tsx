"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const handleSignUp = () => {
    if (!email.trim()) {
      toast.error("❌ Please enter a valid email.");
      return;
    }

    try {
      const existingEmails = JSON.parse(localStorage.getItem("subscribedEmails") || "[]");

      if (existingEmails.includes(email)) {
        toast.warning("⚠️ This email is already subscribed.");
        return;
      }

      const updatedEmails = [...existingEmails, email];
      localStorage.setItem("subscribedEmails", JSON.stringify(updatedEmails));

      toast.success("✅ Successfully subscribed!");
      setEmail("");
    } catch (error) {
      toast.error("❌ Something went wrong.");
    }
  };

  return (
    <div className="flex justify-center bg-white py-12">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="text-center max-w-md">
        <h3 className="text-3xl mb-4">Join BoxCar</h3>
        <p className="text-gray-600 mb-6">Receive pricing updates, shopping tips & more!</p>
        <div>
          <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="border border-gray-300 px-4 py-2 rounded-md w-full" />
          <button onClick={handleSignUp} className="px-6 py-3 mt-5 bg-blue-600 text-white cursor-pointer rounded-md hover:bg-blue-700 transition">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}
