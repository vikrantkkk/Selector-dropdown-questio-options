import React from "react";
import Select from "react-select";
import "./styles.css";

export default function App() {
  const questionSets = [
    {
      question: "What is the capital of France?",
      options: [
        { value: "paris", label: "Paris" },
        { value: "london", label: "London" },
        { value: "berlin", label: "Berlin" },
        { value: "madrid", label: "Madrid" }
      ],
      answer: "paris"
    }
    // Add more question sets here...
  ];

  return (
    <div>
      {questionSets.map((questionSet, index) => (
        <div key={index}>
          <h3>{questionSet.question}</h3>
          <Select options={questionSet.options} isSearchable={true} />
        </div>
      ))}
    </div>
  );
}
