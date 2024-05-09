import './App.css'
import Board from './components/Board'
import Title from './components/Title'

function App() {
  return (
    <div className='game'>
      <Title />
      <div>
        <Board/>
      </div>
    </div>
  )
}

export default App
