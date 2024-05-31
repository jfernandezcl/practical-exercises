import { useState } from "react";
import "./Filters.css";

export function Filters(onChange) {
  const [minPrice, setMinPrice] = useState(0);

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value);

    onChange((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    onChange((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">
      <div>
        <label htmlFor="price">Precio a partir de:</label>
        <input
          type="range"
          id="price"
          min="0"
          max="1000"
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category"></label>
        <select id="category">
          <option value="all">Todas</option>
          <option value="laptops">Portátiles</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  );
}
