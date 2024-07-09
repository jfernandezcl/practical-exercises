import { useState } from 'react'
import './App.css'


type ItemId =`${string}-${string}-${string}-${string}-${string}`
interface Item {
  id: ItemId
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
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return 
    
    const newItem: Item = {
      id: crypto.randomUUID(),
      text: input.value,
      timestamp: Date.now()
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    input.value = ''

   } 

   const createHandleRemoveItem = (id: ItemId) => () => {
      setItems(prevItems => {
       return prevItems.filter(currentItem => currentItem.id !== id)
      })                  
     }

  return (
    <main>
      <section>
      <h1 className='card-title'>Prueba técnica</h1>
      <h2>Añadir elementos</h2>

      <form onSubmit={handleSubmit}>
        <label>Elemento a introducir:
        <input 
          name='item'
          required
          type='text'
          placeholder='Introduce el texto'
        />
        </label>
        <button>Añadir elementos a la lista</button>
      </form>
      </section>

      <section>
        <h2>Lista de elementos</h2>
        <ul>
          {
            items.map(item => {
              return (
                <li key={item.id}>
                  {item.text}
                  <button className='button-delete' onClick={createHandleRemoveItem(item.id)}>
                    Eliminar 
                  </button>
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


