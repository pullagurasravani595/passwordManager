import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const bgColorList = [
  'purple',
  'light-yellow',
  'green',
  'dark-yellow',
  'light-green',
  'red',
]

class PasswordManager extends Component {
  state = {psdList: [], userName: '', websiteName: '', password: ''}

  onChangeWebsite = event => {
    this.setState({websiteName: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()

    const {userName, websiteName, password} = this.state
    const newObject = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
      isChecked: false,
    }
    this.setState(prevState => ({
      psdList: [...prevState.psdList, newObject],
      websiteName: '',
      userName: '',
      password: '',
    }))
  }

  showPasswordCheck = () => {
    this.setState(prevState => ({
      psdList: prevState.psdList.map(eachValue => ({
        ...eachValue,
        isChecked: !eachValue.isChecked,
      })),
    }))
  }

  backgroundColorName = () => {
    const colorName =
      bgColorList[Math.ceil(Math.random() * bgColorList.length - 1)]

    return colorName
  }

  render() {
    const {websiteName, userName, password, psdList} = this.state

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="app-card-container" onSubmit={this.onClickAddBtn}>
          <form className="form-container">
            <h1 className="form-heading">Add New Password</h1>
            <div className="img-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-element"
                onChange={this.onChangeWebsite}
                value={websiteName}
              />
            </div>
            <div className="img-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-logo"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-element"
                onChange={this.onChangeUsername}
                value={userName}
              />
            </div>
            <div className="img-input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-logo"
              />
              <input
                type="text"
                placeholder="Enter Password"
                className="input-element"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="manager-img"
          />
        </div>
        <div className="bottom-container">
          <div className="password-container">
            <div className="password-count-container">
              <p className="password-count">Your Passwords</p>
              <p className="count">0</p>
            </div>
            <div className="search-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-logo"
              />
              <input type="text" className="input-element" />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password-container">
            <input type="checkbox" onChange={this.showPasswordCheck} />
            <label htmlFor="myCheckbox" className="label-element">
              show password
            </label>
          </div>
          <ul className="un-order-list-container">
            {psdList.map(eachItem => (
              <PasswordItem
                itemDetails={eachItem}
                key={eachItem.id}
                colorName={this.backgroundColorName}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
