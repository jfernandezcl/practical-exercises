
import './App.css'

function App() {

  return (
    <main>
      <aside>
      <h1>Prueba técnica</h1>
      <h2>Añadir y eliminar elementos de un lista</h2>

      <form>
        <label>Elemento a introducir:
        <input 
          name='item'
          required
          type='text'
          placeholder='Videojuegos'
        />
        </label>
        <button>Añadir elementos a la lista</button>
      </form>
      </aside>

      <section>
      <ul>
        <h2>Lista de elementos</h2>
        <li>Videojuegos</li>
        <li>Libros</li>
        <li>Series</li>
        <li>Películas</li>
      </ul>
      </section>
    </main>
  )
}

export default App
