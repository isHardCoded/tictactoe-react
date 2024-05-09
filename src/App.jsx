import './App.css'
import Game from './components/Game'
import Title from './components/Title'

function App() {
  return (
    <div className='game'>
      <Title />
      <div>
        <Game/>
      </div>
    </div>
  )
}

export default App
