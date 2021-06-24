import React from 'react'
import Game from './Game.jsx'
import Mole from './Mole.jsx'
class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div id='game_screen'>
        <Game />
      </div>
    )
  }
}

export default App;