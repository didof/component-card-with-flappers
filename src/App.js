import React from 'react'
import './App.css'

// components
import Card from './components/Card'

const square5 = [
  { url: '/', icon: '', color: 'red'},
  { url: '/', icon: '', color: 'orange'},
  { url: '/', icon: '', color: 'yellow'},
  { url: '/', icon: ''},
  { url: '/', icon: '', color: 'blue'}
]

const square1 = [
  { url: '../assets/flop-disk.png', label: 'save', color: 'yellow'}
]

function App() {
  return (
    <div className="App">
      <Card
        color={{front: '#eee', back: '#ccc'}}
        // flipVel={'fast'}
        title={'myFlip'}
        preview={'Very shor preview'}
        squareAmount={square1}
      />
    </div>
  )
}

export default App;

/*### DEFAULTS                                | ### OPIONS & INDICATIONS
                                              |
  color={{front: '#eee', back: '#ccc'}}       | optional
  flipVel={'average'}                         | slower, slow, average, fast, faster
  title={'title'}                             | requested
  preview={'preview'}                         | optional
  squares={{url:'/', icon:'', color:'blue'}}  | requested (max 5)
    default -> color: 'white'                 |
  


  */
