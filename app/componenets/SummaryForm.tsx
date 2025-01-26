/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import locationIcon from "@/public/images/icons/Location.svg"
import Image from "next/image";

const SummaryForm = ({ selectedAnswers }: { selectedAnswers:any }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [isPhoneValid, setIsPhoneValid] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      // Simple validation: checks if phone number is 10 digits
      setIsPhoneValid(/^\d{10}$/.test(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPhoneValid) {
      console.log("Form submitted", formData);
    }
  };

  const transformedAnswers = Object.keys(selectedAnswers).map((key:any) => {
    if (key !== '6') {
      return { text: selectedAnswers[key].text, icon: selectedAnswers[key].icon };
    } else {
      return { text: selectedAnswers[key],icon:locationIcon };
    }
  });

  console.log('transofrmed answer',transformedAnswers)
  

  return (
    <div className="grid md:grid-cols-3 mt-12 gap-x-3 bg-white p-6 rounded-lg shadow-md mx-2   max-w-xl items-center ">
      <form
        onSubmit={handleSubmit}
        className="col-span-2 text-darkshadegray"
      >
        <h2 className="text-base md:text-xl text-left  font-semibold text-darkshadegray mb-6">
        Compare 3 free quotes and see how much you could save.
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-xs md:text-sm font-medium">First name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full text-xs md:text-sm p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="First name"
            />
          </div>
          <div>
            <label className="block mb-1 text-xs md:text-sm font-medium">Last name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border text-xs md:text-sm border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-1 text-xs md:text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 text-xs md:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Email"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-1 text-xs md:text-sm font-medium">Phone number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className={`w-full p-2 text-xs md:text-sm border ${
              isPhoneValid ? "border-gray-300" : "border-red-500"
            } rounded-lg focus:outline-none focus:ring-2 ${
              isPhoneValid ? "focus:ring-blue-500" : "focus:ring-red-500"
            }`}
            placeholder="Phone number"
          />
          {!isPhoneValid && (
            <p className="text-red-500 text-sm mt-1">This field is not valid</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full mt-6 py-2 bg-[#FFBA4A] text-white font-semibold rounded-lg  transition"
        >
          Calculate my savings
        </button>
        <p className="text-gray-500 text-xs text-center mt-4">
          100% privacy guaranteed & no sponsored products
        </p>
      </form>
         <ul className="mt-6 hidden md:block">
                  {Object.entries(transformedAnswers).map(([questionId, answer]) => (
                    <li
                      key={questionId}
                      className={`mb-2 flex items-center gap-x-1 p-2    `}
                    >
                      <Image src={answer.icon} alt="icon" height={16} width={16} />
                      <p
                        className={`  text-xs text-darkshadegray  `}
                      >
                        {answer.text}
                      </p>
                    </li>
                  ))}
                </ul>
    </div>
  );
};

export default SummaryForm;
