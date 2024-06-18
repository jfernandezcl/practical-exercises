import "./Article.css";
// @ts-ignore
import imagen from "../images/vintage.jpg";

const Article = () => {
  return (
    <article className="article-data">
      <div>
        <img className="imagen-principal" src={imagen}></img>
      </div>
      <div className="article-title">
        <h1>BIENVENIDO A LA BARBERÍA</h1>
      </div>
      <div className="card-horario">
        <h2>HORARIO</h2>
        <h3>Lunes a Viernes:</h3>
        <h4>10:30 - 13:30 / 16:00 - 19:30</h4>
        <h3>Sábado:</h3>
        <h4>10:30 - 13:30</h4>
      </div>
      <div className="card-contacto">
        <h2>CONTACTO</h2>
        <h4>Teléfono: 555.123.456</h4>
        <h2>Dirección:</h2>
        <h4>Av. Principal 123</h4>
        <h4>Madrid</h4>
      </div>
      <div className="card-formulario">
        <form>
          <ul>
            <li>
              <label form="name">Nombre: </label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="use_name"
                placeholder="Javi Fernández"
              />
            </li>
            <li>
              <label form="mail">Email: </label>
              <input
                className="form-input"
                type="email"
                id="mail"
                name="user_mail"
              />
            </li>
            <li>
              <label form="msg">Mensaje: </label>
              <textarea
                className="form-input"
                name="user_message"
                id="msg"
              ></textarea>
            </li>
            <li>
              <button type="submit">Enviar</button>
            </li>
          </ul>
        </form>
      </div>
    </article>
  );
};

export default Article;
