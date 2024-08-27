import React from 'react'

const FormComponent = (props) => {
    return (
        <div>
            <form action="">
                <h1>{props.title}</h1>
                {
                    props.type === 'register' &&
                    <input type="text" name="name" placeholder='Enter Name' id="" />
                }

                <input type="email" name="name" placeholder='Enter Email' id="" />
                <input type="password" name="name" placeholder='Enter Password' id="" />
                <input type="button" value={props.btnText} />
            </form>
        </div>
    )
}

export default FormComponent