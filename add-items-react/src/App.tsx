import { useState } from 'react'
import './App.css'
import { Item } from './components/Item'

export type ItemId =`${string}-${string}-${string}-${string}-${string}`
interface Item {
  id: ItemId
  timestamp: number
  text: string

}



function App() {
   const [items, setItems] = useState<Item[]>([]);

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
      <h1 className='card-title'>Technical test</h1>
      <h2>Add elements</h2>

      <form onSubmit={handleSubmit} aria-label='Adding items to the list'>
        <label>Introduces elements:
        <input 
          name='item'
          required
          type='text'
          placeholder='Enter the text'
        />
        </label>
        <button className='button-form'>Add to the list</button>
      </form>
      </section>

      <section className='card-list'>
        <h2>List of items</h2>
          {
            items.length === 0 ? (
              <p className='text-list'>
                <strong>There are no items in the list</strong>
              </p>
            ) : (
              <ul>
                {
                items.map((item) => {
                  return (
                
                  <Item 
                  {...item}
                  handleClick={createHandleRemoveItem(item.id)} 
                  key={item.id}/>
                  )
                })
                }
              </ul>
            )
          }
      </section>
    </main>
  )
}

export default App


