

const CarsList = ({cars}) => {
    return (
        <ul>
            {cars.map(car => (
                <li key={car.id}>
                    <p>Car:{car.model}</p>
                    <img
                    src={car.img}
                    alt={car.model}
                    />
                    <button>leran more</button>
                </li>
            ))}
        </ul>
    )
}

export default CarsList;