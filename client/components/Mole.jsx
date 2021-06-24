import React from 'react';
import css from './Game.css';
import OneMole from './Onemole.jsx';
class Mole extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      one : Math.floor(Math.random() * 2),
      two : Math.floor(Math.random() * 2),
      three : Math.floor(Math.random() * 2)
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setState({
       one : Math.floor(Math.random() * 2),
       three : Math.floor(Math.random() * 2)
      }), 4000);

    this.interval = setInterval(() => this.setState({
      one : Math.floor(Math.random() * 2),
      two : Math.floor(Math.random() * 2),
      }), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='mole-container'>
        {
          this.state.one === 1 ?
          <OneMole score={this.props.score}/>
          : <div className='mole_line' ><img id='dead' src='client/assets/nothing.png'></img></div>
        }
        {
          this.state.two === 1 ?
          <OneMole score={this.props.score}/>
          : <div className='mole_line' ><img id='dead' src='client/assets/nothing.png'></img></div>
        }
        {
          this.state.three === 1 ?
          <OneMole score={this.props.score}/>
          : <div className='mole_line' ><img id='dead' src='client/assets/nothing.png'></img></div>
        }
      </div>
    )
  }
}
export default Mole;
