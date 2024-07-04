import { useState } from 'react'
import './App.css'

const INITIAL_ITEMS = [
{
  id: crypto.randomUUID(),
  timestamp: new Date(),
  text: 'Videojuegos'
},
{
  id: crypto.randomUUID(),
  timestamp: new Date(),
  text: 'Libros'
}
]

function App() {
   const [items, setItems] = useState(INITIAL_ITEMS);

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
        <h2>Lista de elementos</h2>
        <ul>
          {
            items.map(item => {
              return (
                <li key={item.id}>
                  {item.text}
                </li>
              )
            }) 
          }
        </ul>
      </section>
    </main>
  )
}

export default App


