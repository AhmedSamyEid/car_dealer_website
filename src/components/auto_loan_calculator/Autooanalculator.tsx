"use client";

import Image from "next/image";
import { useState } from "react";

export default function AutoLoanCalculator() {
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);

  const handleCalculate = () => {
    const priceInput = document.getElementById("price") as HTMLInputElement;
    const interestInput = document.getElementById("interest") as HTMLInputElement;
    const loanInput = document.getElementById("loan") as HTMLInputElement;
    const downInput = document.getElementById("down") as HTMLInputElement;

    const price = parseFloat(priceInput.value) || 0;
    const interest = parseFloat(interestInput.value) || 0;
    const loan = parseFloat(loanInput.value) || 0;
    const down = parseFloat(downInput.value) || 0;

    const newEntry = {
      price,
      interest,
      loan,
      down,
    };

    const principal = price - down;
    const monthlyInterest = interest / 100 / 12;
    const numberOfPayments = loan * 12;

    let monthly = 0;
    if (monthlyInterest > 0) {
      monthly =
        (principal * monthlyInterest) /
        (1 - Math.pow(1 + monthlyInterest, -numberOfPayments));
    } else {
      monthly = principal / numberOfPayments;
    }

    const roundedMonthly = parseFloat(monthly.toFixed(2));
    setMonthlyPayment(roundedMonthly);

    const existingData = JSON.parse(localStorage.getItem("loanData") || "[]");
    const fullEntry = { ...newEntry, monthlyPayment: roundedMonthly };
    existingData.push(fullEntry);
    localStorage.setItem("loanData", JSON.stringify(existingData));

    priceInput.value = "";
    interestInput.value = "";
    loanInput.value = "";
    downInput.value = "";
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-10 px-4">
      <div className="w-full max-w-md space-y-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-center md:text-left">
          Auto Loan Calculator
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed text-center md:text-left">
          Use this car payment calculator to estimate monthly payments on your next new or used auto loan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            id="price"
            type="text"
            placeholder="Price ($)"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="interest"
            type="text"
            placeholder="Interest Rate (%)"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="loan"
            type="text"
            placeholder="Loan Term (years)"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            id="down"
            type="text"
            placeholder="Down Payment ($)"
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleCalculate}
            className="p-3 bg-[#405FF2] w-40 rounded-md text-white cursor-pointer"
          >
            Calculate
          </button>
        </div>

        {monthlyPayment !== null && (
          <div className="text-green-600 text-lg font-semibold mt-4">
            Monthly Payment: ${monthlyPayment}
          </div>
        )}
      </div>

      <div className="w-full max-w-md">
        <Image
          src="/image/Image-fotor-202507150317.png"
          width={500}
          height={200}
          alt="Auto Loan Calculator Image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
