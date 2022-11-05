// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    const {isDarkMode} = this.state
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
    console.log(isDarkMode)
  }

  render() {
    const {isDarkMode} = this.state
    const cardTheme = isDarkMode ? 'dark-theme' : 'light-theme'
    const headingTheme = isDarkMode ? 'dark-mode-text' : 'light-mode-text'
    const btnTheme = isDarkMode ? 'btn-dark-theme' : 'btn-light-theme'
    const btnText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`card ${cardTheme}`}>
          <h1 className={`heading ${headingTheme}`}>Click to Change Mode</h1>
          <button
            type="button"
            className={`button ${btnTheme}`}
            onClick={this.changeMode}
          >
            {btnText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
