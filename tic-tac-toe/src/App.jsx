/* eslint-disable react/jsx-key */
import './App.css'
import Square from './square/square'

const renderFrom = [
  [1,2,3],[4,5,6],[7,8,9]
]
const App = () => {
  return (
    <div className='main-div'>
      <div>
        <div className='move-detection'>
            <div className='left-side'>Your Name</div>
            <div className="right-side">Opponent</div>
        </div>
        <h1 className='game-heading water-background'>Tic Tac Toe</h1>
        <div className='square-wrapper'>
        {
          renderFrom.map((arr) => arr.map(()=>{
            return <Square/>
          }))
        }
        </div>
      </div>
      
    </div>
  )
}

export default App

