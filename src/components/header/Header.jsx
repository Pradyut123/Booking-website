import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerContainer">
        <div className='headerList'>
            <div className='headerListItem active'>
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faCar} />
                <span>car Rentals</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faBed} />
                <span>Attraction</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport taxis</span>
            </div>
        </div>
        <h1 className="headertitle">A lifetime of discounts? It's Genius</h1>
        <p className="headerDesc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="headerBtn">Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header