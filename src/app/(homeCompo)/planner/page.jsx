"use client";

import React, { useEffect, useState } from 'react';

const page = () => {
  const [itineraryData, setItineraryData] = useState([]);

  useEffect(() => {
    // Sample data for development
    const sampleData = [
      { destination: "Ooty", preferences: "Sightseeing", number_of_days: "5", budget: "15000" },
      { destination: "Coorg", preferences: "Adventure", number_of_days: "3", budget: "8000" },
      { destination: "Munnar", preferences: "Relaxation", number_of_days: "4", budget: "12000" },
    ];

    setItineraryData(sampleData);
  }, []);

  const sendItineraryInput = () => {
    const inputData = {
      destination: "Ooty",
      preferences: "Sightseeing",
      number_of_days: "10",
      budget: "10000"
    };

    console.log('Input Data:', inputData);
  };

  return (
    <div>
      <h2>Itinerary Data</h2>
      <ul>
        {itineraryData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <button onClick={sendItineraryInput}>Send Itinerary Input</button>
    </div>
  );
};

export default page;
