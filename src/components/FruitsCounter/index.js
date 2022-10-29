import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  onEatingMangoes = () => {
    this.setState(prevState => ({
      mangoes: prevState.mangoes + 1,
    }))
  }

  onEatingBananas = () => {
    this.setState(prevState => ({
      bananas: prevState.bananas + 1,
    }))
  }

  render() {
    const {mangoes, bananas} = this.state
    return (
      <div className="fruits-counter-container-bg">
        <div className="fruits-counter-card">
          <h1>
            Bob ate <span className="fruit-count">{mangoes}</span> mangoes
            <span className="fruit-count"> {bananas} </span>
            bananas
          </h1>
          <div className="fruits-card">
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                onClick={this.onEatingMangoes}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-card">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                onClick={this.onEatingBananas}
                type="button"
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
