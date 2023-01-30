import './index.css'

const PasswordItem = props => {
  const {itemDetails, colorName} = props
  const {websiteName, userName, password, isChecked} = itemDetails
  const initial = websiteName[0].toUpperCase()
  const bgColor = colorName()
  const containerName = `profile-letter ${bgColor}`
  const psdView = isChecked ? (
    <p className="description">{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  return (
    <>
      <li className="list-container">
        <p className={containerName}>{initial}</p>
        <div>
          <p className="description">
            {websiteName}
            <br />
            {userName} <br />
          </p>
          {psdView}
        </div>

        <button type="button" className="delete-btn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    </>
  )
}

export default PasswordItem
