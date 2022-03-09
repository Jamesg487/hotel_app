import { useState } from 'react'

const NewBookingForm = ({ createBooking }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [checkedIn, setCheckedIn] = useState(false)

    const handleNameChange = event => setName(event.target.value)
    const handleEmailChange = event => setEmail(event.target.value)
    const handleCheckedInChange = event => setCheckedIn(event.target.value) 

    const handleSubmit = event => {
        event.preventDefault()
        if (name == "") {return } 
        if (email == "") {return } 
        const booking = {
            name,
            email,
            checkedIn
        }

        createBooking(booking)
        setName('')
        setEmail('')
        setCheckedIn(false)
    }

    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={handleNameChange} 
          required 
        />
  
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={handleEmailChange} 
          required
        />
  
        <label htmlFor="checkedIn">Checked In:</label>
        <input 
          type="Boolean" 
          id="checkedIn" 
          value={checkedIn} 
          onChange={handleCheckedInChange} 
          required
        />
  

  
        <input type="submit" name="submit" value="Make Booking"/>
      </form>
    )
}

export default NewBookingForm;