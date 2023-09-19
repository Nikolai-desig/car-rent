import React, { useState, useEffect } from "react";
import {getCars} from "../../services/apiCars";
import CarsList from "../../components/CarsList/CarsList";
import FormFilter from "../../components/FormFilters/FormFilters";

const Cars = () => {
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
        <FormFilter/>
        {cars ? <CarsList cars={cars}/> : <p>Loading...</p>}
      </div>
    );
}

export default Cars;