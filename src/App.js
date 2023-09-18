import React, { useState, useEffect } from "react";
import {getCars} from "./services/apiCars";
import CarsList from "./components/CarsList/CarsList";

export default function App() {
  const [cars, setCars] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      const carsList = await getCars();
      setCars(carsList)
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {cars ? <CarsList cars={cars}/> : <p>Loading...</p>}
    </div>
  );
}

