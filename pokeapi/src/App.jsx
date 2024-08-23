import './css/app.css'
import portada from './images/img-portada.jpg'


function App() {

  return (
    <>
      <div className='container-portada'>
        <h1>Poké API</h1>
        <img className='img-portada' src={portada} alt='portada' />
      </div>
    </>
  )
}

export default App
