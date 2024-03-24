// Write your code here
import './index.css'

const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li className="list-card">
      <img src={imageUrl} className="image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
