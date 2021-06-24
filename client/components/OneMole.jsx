import React from 'react';
import css from './Game.css';

class OneMole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hit: false
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick () {
    this.props.score();
    this.setState ((prevState) => {
      return {
        hit: true
      }
    })
  }

  render() {
    return (
      <div className='mole_line' >
        {
          this.state.hit === false ?
          <img id='mole' src='client/assets/sponge.gif' onClick={this.handleClick}></img>
          : <img id='dead' src='client/assets/dead_sponge.gif'></img>
        }
      </div>
    )
  }
}

export default OneMole;
