export function Item ({ text, handleClick} : { text: string, handleClick: () => void }) {
    return(
        <li>
        {text}
        <button className='button-delete' onClick={handleClick}>
          Delete 
        </button>
      </li>
    )
}