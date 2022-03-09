

const Booking = ({booking, deleteBooking, updateBooking}) => {

        const handleDeleteClick = () => {
            deleteBooking(booking._id)
        }
        const handleUpdateClick = () => {
            let newCheckInStatus
            booking.checked_in === true ? booking.checked_in = false : booking.checked_in = true 
            console.log(booking)
            updateBooking(booking._id, booking)
            
        }

        

        return(
            <div className="booking">
            <h3>{booking.name}</h3>
            <p>{booking.email}</p>
            {booking.checked_in === true ? <p>Checked-in</p> : <p>Not Checked-in</p>}
            <button 
                type="button"
                className="delete-btn"
                onClick={handleDeleteClick}
            >Delete Booking
            </button>
            {booking.checked_in === true ? 
            <button 
                type="button"
                className="update-btn"
                onClick={handleUpdateClick}
            >Check-Out
            </button> :
            <button 
                type="button"
                className="update-btn"
                onClick={handleUpdateClick}
            >Check-In
            </button>}

            </div>
        )
}

export default Booking;
