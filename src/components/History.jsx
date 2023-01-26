import React, { useEffect, useState } from 'react'
import "../required/history.css"
import Spinner from './Spinner'

const History = () => {
    const [loading, setLoading] = useState(false)
    const [fetchTrigger, setFetchTrigger] = useState(0)
    const [lostdata, setLost] = useState()
    const [found, setFound] = useState()
    const Refresh = () => {
        setFetchTrigger(fetchTrigger + 1)
        setFound()
        setLost()
    }

    const remove = async (id, value) => {
        await fetch( process.env.REACT_APP_baseurl+"/api/remove/removedata/" + value + "/" + id, {
            method: "DELETE"
        })
    }
    useEffect(() => {
        const getDat = async () => {
            setLoading(true)
            await fetch(process.env.REACT_APP_backend_history, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(async (data) => {
                let reqd = await data.json()
                setLost(reqd.payload.lostData)
                setFound(reqd.payload.foundData)
                setLoading(false)
            })
        }
        getDat()
    }, [fetchTrigger])
    return (
        <div className='xyz'>
            <div className='butt'>
                <button type="button" class="btn btn-dark m-2" onClick={Refresh}>Refresh Data</button>
            </div>
            <div className="lost">
                <h1 className='hea'>Lost Item History</h1>
                {loading && <Spinner />}
                <div className="box">
                    {lostdata && (lostdata.length>0 )?lostdata.map((ele) => {
                        return (
                            <div className="item">
                                <h2 className='hea'>{ele.lostItem}</h2>
                                <ul>
                                    <li><span>Date of lost : </span>{(ele.lostdate).split("-").reverse().join("-")}</li>
                                    <li><span>Lost at : </span>{ele.location}</li>
                                    <li><span>Specification: </span>{ele.specification}</li>
                                    <li><span>Contact : </span>{ele.contact}</li>
                                    <button className='btn btn-outline-danger btn-sm m-2' type='button' style={{ float: "right" }} onClick={() => remove(ele._id, "lost")}>Mark as resolved</button>
                                </ul>
                            </div>
                        )
                    }):
                    <div className='item' style={{margin : "auto", marginTOp : "20px"}}><h2 className='hea'>Nothing is lost</h2></div>}
                </div>
            </div>
            <div className="found">
                <h1 className='hea'>Found Item History</h1>
                {loading && <Spinner />}
                {found && (found.length>0) ? found.map((ele) => {
                    return (<div className="box"><div className="item">
                        <h2 className='hea'>{ele.foundItem}</h2>
                        <ul type="disc">
                            <li><span> Date of found : </span>{(ele.founddate).split("-").reverse().join("-")}</li>
                            <li><span> Specification: </span>{ele.specification}</li>
                            <li><span> Lost Location : </span>{ele.location}</li>
                            <li><span> Contact : </span>{ele.contact}</li>
                            <button className='btn btn-outline-danger btn-sm m-2' type='button' style={{ float: "right" }} onClick={() => remove(ele._id, "found")}>Mark as resolved</button>
                        </ul>
                    </div></div>
                    )
                }):
                <div className='item' style={{margin : "auto", marginTOp : "20px"}}><h2 className='hea'>Nothing is Found</h2></div>}
            </div>

        </div>
    )
}

export default History
