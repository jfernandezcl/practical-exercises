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
        <p>HORARIO: Lunes a Viernes: 10:30 - 13:30 / 16:00 - 19:30</p>
      </div>
    </article>
  );
};

export default Article;

//BIENVENIDO A LA BARBERÍA
//10:30 - 13:30 / 16:00 - 19:30
