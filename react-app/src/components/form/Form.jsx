import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ type, placeholder }) => {
    return (
        <>
            <input type={type} placeholder={placeholder} />
        </>
    )
}

Form.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}
Form.defaultProps = {
    type: "password"
}

export default Form