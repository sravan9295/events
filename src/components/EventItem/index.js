/* eslint-disable prettier/prettier */
// Write your code here
import './index.css'

const EventItem = props => {
  const {details, onClickFunction} = props
  const {imageUrl, name, location, registrationStatus} = details

  return (
    <li className="event-card">
      <button
        className="image-button"
        type="button"
        onClick={() => {
          onClickFunction(registrationStatus)
        }}
      >
        <img className="event-card-image" src={imageUrl} alt="event" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
