import { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}-`
  timestamp: number
  text: string

}

const INITIAL_ITEMS: Item[] = [
{
  id: crypto.randomUUID(),
  timestamp: Date.now(),
  text: 'Videojuegos'
},
{
  id: crypto.randomUUID(),
  timestamp: Date.now(),
  text: 'Libros'
}
]

function App() {
   const [items, setItems] = useState(INITIAL_ITEMS);

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget 
    const input = elements.namedItem('item')
 
   } 

  return (
    <main>
      <aside>
      <h1>Prueba técnica</h1>
      <h2>Añadir y eliminar elementos de un lista</h2>

      <form onClick={handleSubmit}>
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


