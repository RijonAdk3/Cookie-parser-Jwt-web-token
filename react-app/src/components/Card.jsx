import React from 'react'
import './css/style.css'

const Card = ({ path }) => {
    return (
        <div style={{ backgroundColor: "" }}>
            <img src={path} alt="" className='' />
        </div>
    )
}

export default Card