import React from 'react'
import { Link } from 'react-router-dom'
import Element from './Element'

const Background = () => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
            <Link to="/lost" style={{ textDecoration: "none" }}>
                <Element title="Lost Item" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui harum corrupti sequi numquam vero quidem dolorum nisi alias. Fugit nihil doloremque inventore tenetur aliquam, voluptas ducimus soluta nesciunt, quas obcaecati quaerat." img="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Lost_letters.jpg/1200px-Lost_letters.jpg" /></Link>
            <Link to="/found" style={{ textDecoration: "none" }}>
                <Element title="Found Item" desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui harum corrupti sequi numquam vero quidem dolorum nisi alias. Fugit nihil doloremque inventore tenetur aliquam, voluptas ducimus soluta nesciunt, quas obcaecati quaerat." img="https://lsvp.com/wp-content/uploads/2022/02/Jy8SlfnG_400x400.jpeg" /></Link>
        </div>
    )
}

export default Background
