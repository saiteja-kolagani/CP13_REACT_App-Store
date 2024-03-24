// Write your code here
import './index.css'

const TabItem = props => {
  const {details, onTap} = props
  const {tabId, displayText} = details
  const tabItemSelected = () => {
    onTap(tabId)
  }
  return (
    <li>
      <button className="tab-button" type="button" onClick={tabItemSelected}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
