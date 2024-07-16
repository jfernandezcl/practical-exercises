import { ItemId } from "../App"

export function Item ({id, text, handleClick} : { id: ItemId, text: string, handleClick: () => void }) {
    return(
        <li key={id}>
        {text}
        <button className='button-delete' onClick={handleClick}>
          Delete 
        </button>
      </li>
    )
}