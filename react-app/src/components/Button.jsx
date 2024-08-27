import React from 'react'

const Button = (props) => {
    return (
        <button className={`p-2 px-4 rounded-md text-white ${props.bgColor}`}>{props.text}</button>
    )
}

export default Button;