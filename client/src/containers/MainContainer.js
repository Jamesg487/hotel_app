import React, {useState, useEffect} from 'react'
import NewBookingForm from '../components/NewBookingForm'
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

    const deleteBooking = idToDelete => {
        BookingsService.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    return(
        <>
        <NewBookingForm createBooking={createBooking} />
        {/* <BookingList bookings={bookings} deleteBooking={deleteBooking} /> */}
        </>
    )
}

export default MainContainer;