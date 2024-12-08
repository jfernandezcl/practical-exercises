import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // @ts-ignore
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // @ts-ignore
    console.log(formData);
  };

  return (
    <form>
      <ul>
        <li>
          <label form="name">Nombre: </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            placeholder="Javi Fernández"
            value={formData.name}
            onChange={handleChange}
          />
        </li>
        <li>
          <label form="mail">Email: </label>
          <input
            className="form-input"
            type="email"
            id="mail"
            name="email"
            placeholder="javi@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
        </li>
        <li>
          <label form="msg">Mensaje:</label>
          <textarea
            className="form-mensaje"
            name="message"
            id="msg"
            placeholder="Escribir mensaje..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </li>
        <li>
          <button className="form-button" type="submit">
            Enviar
          </button>
        </li>
      </ul>
    </form>
  );
};
export default Formulario;
