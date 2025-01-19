"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const questions = [
  { id: 1, text: "What are you interested in?", option1: "solar power system", option2: "solar and battery storage" },
  { id: 2, text: "Do you own or rent the property?", option1: "Own", option2: "Rent" },
  { id: 3, text: "What material is the roof?", option1: "Tin", option2: "Tile", option3: "Other" },
  { id: 4, text: "How many storeys are there?", option1: "Single-storey", option2: "Multi-storey" },
  { id: 5, text: "Roughly how much is your power bill per quarter?", option1: "Less than $500", option2: "$500 - $1000", option3: "$1000 - $2000", option4: "$2000 or more", option5: "Not sure" },
  { id: 6, text: "Question 6?", option1: "Option 1", option2: "Option 2" },
  { id: 7, text: "Where do you live?", isAddress: true },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleOptionSelect = (option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion]: option,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      router.push("/completed"); // Redirect after the last question
    }
  };

  const handleAddressSubmit = () => {
    if (address.trim()) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestion]: address,
      }));
      router.push("/completed");
    } else {
      alert("Please enter your address.");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gradient5">
      {/* Progress Circle */}
      <div className="relative mb-6">
        <div className="w-20 h-20">
          <svg className="transform -rotate-90">
            <circle cx="40" cy="40" r="36" strokeWidth="4" stroke="#e5e7eb" fill="none" />
            <circle
              cx="40"
              cy="40"
              r="36"
              strokeWidth="4"
              stroke="#3b82f6"
              fill="none"
              strokeDasharray={226} // 2πr (2 * Math.PI * 36)
              strokeDashoffset={226 - (progress / 100) * 226}
            />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-blue-500 font-semibold">
          {Math.round(progress)}%
        </div>
      </div>

      {/* Question */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">
        {questions[currentQuestion].text}
      </h2>

      {/* Render Input for Address or Options */}
      {questions[currentQuestion].isAddress ? (
        <div className="flex flex-col items-center w-full">
          <input
            type="text"
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-3 w-3/4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 mb-4"
          />
          <button
            onClick={handleAddressSubmit}
            className="p-3 w-3/4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            Continue
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(questions[currentQuestion])
            .filter((key) => key.startsWith("option"))
            .map((optionKey) => {
              const optionText = questions[currentQuestion][optionKey as keyof typeof questions[number]];
              const isSelected = selectedAnswers[currentQuestion] === optionText;

              return (
                <button
                  key={optionKey}
                  onClick={() => handleOptionSelect(optionText)}
                  className={`p-4 rounded-lg shadow ${
                    isSelected
                      ? "bg-green-500 text-white"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                >
                  {optionText}
                </button>
              );
            })}
        </div>
      )}

      {/* Back Button */}
      {currentQuestion > 0 && (
        <button
          onClick={handleBack}
          className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400"
        >
          Back
        </button>
      )}
    </div>
  );
}
