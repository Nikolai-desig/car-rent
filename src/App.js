import React, { useState, useEffect } from "react";
import {getCars} from "./services/apiCars";
import CarsList from "./components/CarsList/CarsList";
import FormFilter from "./components/FormFilters/FormFilters";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        
      </Routes>
      <FormFilter/>
      {cars ? <CarsList cars={cars}/> : <p>Loading...</p>}
    </div>
  );
}

