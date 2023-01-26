import React, {useState} from 'react'
import "../required/found.css"

const Found = () => {
    const [parameter,setParameters] = useState({
        name : "",
        foundItem: "",
        location : "",
        foundDate : null,
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
          body : JSON.stringify({name: parameter.name,foundItem : parameter.foundItem, location: parameter.location, foundDate: parameter.foundDate, contact : parameter.contact, spec : parameter.spec })
        }) 
    }
    return (
        <div className='conta'>
            <h1 style={{ textAlign: "center" }}>Found Item</h1>
            <form action="" method='post' onSubmit={handleSubmit}>
                <div className='d-flex flex-fill'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" onChange={handleChange} value={parameter.name} />
                </div>
                <div className='d-flex flex-fill'>
                    <label htmlFor="foundItem">Found Item:</label>
                    <input type="text" name="foundItem" id="foundItem" onChange={handleChange} value={parameter.foundItem} />
                </div>
                <div>
                    <label htmlFor="location">Found Place:</label>
                    <input type="text" name="location" id="location" onChange={handleChange} value={parameter.location} />
                </div>
                <div>
                    <label htmlFor="foundDate">Found Date:</label>
                    <input type="date" name="foundDate" id="foundDate" max={new Date().toISOString().slice(0,10)} onChange={handleChange} value={parameter.foundDate} />
                </div>
                <div>
                    <label htmlFor="contact">Contact Details</label>
                    <input type="email" name='contact' id='contact' onChange={handleChange} placeholder= "Your email id" value={parameter.contact} />
                </div>
                <div>
                    <label htmlFor="spec">Any other Specification:</label>
                    <input type="text" name="spec" id="spec" onChange={handleChange} value={parameter.spec} />
                </div>
                <div className='abc'>
                    <button className="btn_" type='submit'>Upload Request</button>
                </div>
            </form>
        </div>
    )
}

export default Found
