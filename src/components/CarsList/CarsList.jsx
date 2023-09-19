import css from './CarsList.module.css'

const CarsList = ({ cars }) => {
  return (
    <ul className={css.cars__list}>
      {cars.map((car) => (
        <li key={car.id} className={css.car__box}>
          <img src={car.img} alt={car.model} className={css.car__img}/>
          <p>{car.make}<p>{car.model}</p></p>
          <button>leran more</button>
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
