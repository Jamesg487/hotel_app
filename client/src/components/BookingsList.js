import Booking from './Booking'

const BookingList = ({bookings, deleteBooking, updateBooking}) => {
   
    const BookingNodes = bookings.map(booking => {

        return(
            <Booking 
            key = {booking._id}
            booking={booking}
            deleteBooking={deleteBooking}
            updateBooking={updateBooking}
            />
        )
    })
    
    return(
        <ul className="bookingwrapper">
            {BookingNodes}
            </ul>
    )
}
export default BookingList;