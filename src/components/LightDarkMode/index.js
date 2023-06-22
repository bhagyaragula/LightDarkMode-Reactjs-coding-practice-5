// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickLightMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const {isDarkMode} = this.state

    const modeClassName = isDarkMode ? 'dark-mode' : 'light-mode'

    const buttonMode = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`inner-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.onClickLightMode}
          >
            {buttonMode}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
