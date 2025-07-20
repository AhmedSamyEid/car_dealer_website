"use client";
import { useState } from "react";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SubscribeToOurMailing() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between bg-[#3551D7] rounded-2xl p-6 lg:p-10 gap-8 w-full max-w-6xl mx-auto">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="w-full lg:w-auto flex justify-center">
        <Image src="/image/Back.png" alt="Mailing banner" width={250} height={50} />
      </div>

      <div className="w-full flex flex-col items-start text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug">
          Subscribe To Our Mailing
          <br />
          List And Stay Up To Date
        </h2>
        <p className="text-sm sm:text-base mb-4">We’ll keep you updated with the best new jobs.</p>

        <div className="flex flex-col sm:flex-row w-full gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-5 py-3 bg-[#405FF2] text-white placeholder-white rounded-2xl focus:outline-none"
          />
          <button onClick={handleSubscribe} className="px-6 py-3 bg-white text-[#3551D7] font-semibold rounded-2xl hover:bg-gray-100 transition">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
