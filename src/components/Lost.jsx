import React, {useState} from 'react'
import "../required/lost.css"
const Lost = () => {
  const [parameter,setParameters] = useState({
    name : "",
    lostItem: "",
    location : "",
    lostDate : null,
    contact :"",
    spec : ""
  })
  const handleChange = (e) => {
    setParameters({...parameter, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e)=> {
    e.preventDefault()
    const response = await fetch(process.env.REACT_APP_backend_lost, {
      method: "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({name: parameter.name,lostItem : parameter.lostItem, location: parameter.location, lostDate: parameter.lostDate, contact : parameter.contact, spec : parameter.spec })
    }) 
  }
  return (
    <div className='conta'>
    <h1 style={{textAlign: "center"}}>Lost Item</h1>
      <form action="" method='post' onSubmit={handleSubmit}>
      <div className='d-flex flex-fill'>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" value = {parameter.name} onChange={handleChange} />
      </div>
      <div className='d-flex flex-fill'>
        <label htmlFor="lostItem">Lost Item:</label>
        <input type="text" name="lostItem" id="lostItem" value = {parameter.lostItem} onChange={handleChange} />
      </div>
        <div>
            <label htmlFor="location">Lost Place:</label>
            <input type="text" name="location" id="location" value = {parameter.location} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="lostDate">Lost Date:</label>
            <input type="date" name="lostDate" id="lostDate" max={new Date().toISOString().slice(0,10)} value = {parameter.lostDate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="contact">Contact Details:</label>
          <input type="email" name="contact" id="contact" placeholder='Your email id' value = {parameter.contact} onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="spec">Any other Specification:</label>
            <input type="text" name="spec" id="spec" value = {parameter.spec} onChange={handleChange} />
        </div>
        <div className='abc'>
      <button className="btn_" type='submit'>Upload Request</button>

        </div>
      </form>
    </div>
  )
}

export default Lost
