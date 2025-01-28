/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import locationIcon from "@/public/images/icons/Location.svg";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const SummaryForm = ({
  selectedAnswers,
  fullAdressInfo,
}: {
  selectedAnswers: any;
  fullAdressInfo: any;
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [formSuccessfullySubmited, setFormSuccessfullySubmited] =
    useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const {
    country,
    state,
    city,
    postcode,
    lat,
    lon,
    place_id,
    address_line1,
    address_line2,
  } = fullAdressInfo;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "phoneNumber") {
      // Simple validation: checks if phone number is 10 digits
      setIsPhoneValid(/^\d{10}$/.test(value));
    }
  };

  console.log("selectec answers", selectedAnswers);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isPhoneValid) {
      console.log("Form submitted", formData);

      const details = {
        contact: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formData.phoneNumber,
          email: formData.email,
        },
        address: {
          full: address_line1 + address_line2,
          postCode: postcode,
          placeId: place_id,
          state: state,
          country: country,
          city: city,
          suburb: address_line1,
          coordinates: { lat: lat, lng: lon },
        },
        leadTypes: ["RPV"], // Adjust as needed
        isOwner: false,
        roofType: selectedAnswers[2]?.text,
        storeys: selectedAnswers[3]?.text,
        tags: ["SL"],
        energyProvider: "", // optional
        energyBill: 0, // optional
        comments: "", // optional
      };

      console.log("details", details);

      try {
        const response = await axios.post("/api/proxy", details);

        console.log("Response from API:", response.data);
        setFormSuccessfullySubmited(true);
        alert("Form submitted successfully!");
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };

  const transformedAnswers = Object.keys(selectedAnswers).map((key: any) => {
    if (key !== "6") {
      return {
        text: selectedAnswers[key].text,
        icon: selectedAnswers[key].icon,
      };
    } else {
      return { text: selectedAnswers[key], icon: locationIcon };
    }
  });

  return (
    <div>
      {!formSuccessfullySubmited && (
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
                <label className="block mb-1 text-xs md:text-sm font-medium">
                  First name
                </label>
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
                <label className="block mb-1 text-xs md:text-sm font-medium">
                  Last name
                </label>
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
              <label className="block mb-1 text-xs md:text-sm font-medium">
                Email
              </label>
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
              <label className="block mb-1 text-xs md:text-sm font-medium">
                Phone number
              </label>
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
                <p className="text-red-500 text-sm mt-1">
                  This field is not valid
                </p>
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
                <p className={`  text-xs text-darkshadegray  `}>
                  {answer.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {formSuccessfullySubmited && (
        <div className="bg-white p-6   rounded-lg shadow-md text-center max-w-lg mt-12 w-fit mx-4 ">
          <CheckCircle className="w-10 h-10 text-darkshadegray mx-auto" />
          <h2 className="text-xl font-semibold text-backgroundPaleYellow mt-2">
            Information Received! 
          </h2>
          <p className="mt-2 text-darkshadegray">
            Thank you for submitting your details. We have successfully received
            your information and will process it shortly.
          </p>
          <Link href="/"><span className="text-backgroundPaleYellow cursor-pointer  text-sm block mt-4">Go Back</span></Link>
        </div>
      )}
    </div>
  );
};

export default SummaryForm;
