// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {isRandom: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onButton = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({isRandom: randomNumber})
  }

  render() {
    const {isRandom} = this.state
    return (
      <div className="container">
        <div className="box">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" className="button" onClick={this.onButton}>
            Generate
          </button>
          <p class="para">{isRandom}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
