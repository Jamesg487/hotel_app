import React, {useState, useEffect} from 'react'
import NewBookingForm from '../components/NewBookingForm'
import BookingList from '../components/BookingsList'
import BookingsService from '../services/BookingsService'

const MainContainer = () => {

    const [bookings, setBookings] = useState([])

    useEffect(() => {
        BookingsService.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = newBooking => {
        BookingsService.postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))

    }

    const updateBooking = (idToUpdate, payload) => {
        BookingsService.putBooking(idToUpdate, payload)
        .then (() => {
            BookingsService.getBookings()
            .then(bookings => setBookings(bookings))
        })
        }
    

    const deleteBooking = idToDelete => {
        BookingsService.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    return(
        <div className='main-container'>
        <NewBookingForm className="new-booking-form" createBooking={createBooking} />
        <BookingList bookings={bookings} deleteBooking={deleteBooking} updateBooking={updateBooking} />
        </div>
    )
}

export default MainContainer;