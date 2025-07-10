import React, { useState } from "react";
import { foundadd } from "../../api/user-api";
import Swal from "sweetalert2";
import { SwalError, SwalSuccess } from "../../utils/custom-alert";

const FoundAdd = () => {
  const [formData, setFormData] = useState({
    email: "",
    investmentAmount: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { investmentAmount, email } = formData;
    if (!investmentAmount || !email) {
      return SwalError.fire({
        icon: "error",
        title: "Error",
        text: "Email & Investment amount are required.",
      });
    }
    const data = await foundadd({ amount: investmentAmount, email });
    if (data?.success) {
      return SwalSuccess.fire({
        icon: "success",
        title: "Success",
        text: data?.message,
      });
    }
    return SwalError.fire({
      icon: "error",
      title: "Error",
      text: data?.message,
    });
  };

  return (
    <div className="mt-[5rem] flex items-center justify-center  text-white pt-[10rem] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-[#111] p-10 rounded-lg shadow-xl border border-gray-700"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400 mb-8 text-center">
          My AI Wallet
        </h2>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block font-medium text-[1.5rem] text-orange-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
          />
        </div>

        {/* Investment Amount */}
        <div className="mb-8">
          <label
            htmlFor="investmentAmount"
            className="block text-[1.5rem] font-medium text-orange-300 mb-2"
          >
            Investment Amount
          </label>
          <input
            type="number"
            name="investmentAmount"
            id="investmentAmount"
              placeholder="Enter Investment Amount"
            required
            value={formData.investmentAmount}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400 text-lg"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FoundAdd;
