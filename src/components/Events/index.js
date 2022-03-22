/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {Component} from 'react'
import EventItem from '../EventItem'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'd1153723-5b6e-4628-9a1a-ccd8f84f1273',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/events-kolatam-img.png',
    name: 'Janapada Kolatam',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '7d6ec013-d0ae-4d84-b776-14b733a9174f',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-colonial-fest-img.png',
    name: 'Colonial Fest',
    location: 'Washington, America',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]
// Write your code here

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registrationStatus: 'INITIAL',
    }
  }

  onClickEventItem = registrationStatus => {
    console.log(registrationStatus)
    this.setState({
      registrationStatus,
    })
  }

  renderEventsList = () => {
    console.log('in renderEventsList')

    return (
      <div className="events-container">
        <h1 className="heading">Events</h1>
        <ul className="ul-list">
          {eventsList.map(event => (
            <EventItem
              key={event.id}
              details={event}
              onClickFunction={this.onClickEventItem}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderYetToRegisterView = () => (
    <div className="">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>A live performance brings so much to your relationship with dance</p>
      <button type="button">Register Here</button>
    </div>
  )

  renderRegisteredView = () => (
    <div className="">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen the registrations soon.</p>
    </div>
  )

  renderActiveEvent = () => {
    const {registrationStatus} = this.state

    switch (registrationStatus) {
      case 'YET_TO_REGISTER':
        return this.renderYetToRegisterView()
      case 'REGISTERED':
        return this.renderRegisteredView()
      case 'REGISTRATIONS_CLOSED':
        return this.renderRegistrationClosedView()
      default:
        return <p>Click on an event, to view its registration details</p>
    }
  }

  render() {
    return (
      <div className="app-container">
        {this.renderEventsList()}
        <div className="active-event-container">{this.renderActiveEvent()}</div>
      </div>
    )
  }
}

export default Events
