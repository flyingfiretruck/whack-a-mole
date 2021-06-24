import React from 'react';
import css from './Game.css';
import Mole from './Mole.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      start: false,
      score: 0
    }
    this.handleStart = this.handleStart.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.scoreUp = this.scoreUp.bind(this);
  }

  handleStart () {
    this.setState ((prevState) => {
      return {
        start: true,
        score: 0
      }
    })
  }

  handleEnd () {
    this.setState ((prevState) => {
      return {
        start: false
      }
    })
  }

  scoreUp () {
    this.setState({
      score: this.state.score += 1
    })
  }


  render() {
    const {x, y} = this.state;
    return (
      <div>
        <div id='top-line'>
          <h1>score: <hi>{this.state.score}</hi></h1>
          {
            this.state.start === true ?
            <h1 id='start-button' onClick={this.handleEnd}>End Game</h1>
            : <h1></h1>
          }
        </div>

        <div className='container'>
          {
            this.state.start === false ?
            <img className='background' onClick={this.handleStart} src='client/assets/start.png'></img>
            :<div>
              <img className='background' src='client/assets/background.jpeg'></img>
              <div id= 'mole-containers'><Mole score={this.scoreUp}/>
              <Mole score={this.scoreUp}/><Mole score={this.scoreUp}/></div>
            </div>
          }
          {/* {
            this.state.start === true ?
            <div id= 'mole-containers'><Mole /><Mole /><Mole /></div>
            : null
          } */}
        </div>

      </div>
    )
  }
}
export default Game;

