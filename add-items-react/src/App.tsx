
import './App.css'
import { Item } from './components/Item'
import { useItems } from './hooks/useItems'

export type ItemId =`${string}-${string}-${string}-${string}-${string}`
export interface Item {
  id: ItemId
  timestamp: number
  text: string

}



function App() {
   const { items, addItem, removeItem } = useItems()

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input == null) return 

    addItem(input.value)
    input.value = ''
   }
   
   const createHandleRemoveItem = (id: ItemId) => () => {
    removeItem(id)
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


