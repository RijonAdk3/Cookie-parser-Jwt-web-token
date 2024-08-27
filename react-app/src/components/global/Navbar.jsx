import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button'

const Navbar = () => {
    const [isUser, setIsUser] = useState('');

    // setIsUser("sagerr")
    return (
        <nav className='p-6 flex px-4 justify-between items-center bg-amber-600 text-black'>
            <h1 className='text-2xl font-bold'>LOGO</h1>
            <ul className='flex gap-2'>
                <Link to="/">
                    <li className='font-bold'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='font-bold'>About</li>
                </Link>
                <Link to='/contact' >
                    <li className='font-bold'>Contact</li>
                </Link>
                <Link to='/service' >
                    <li className='font-bold'>Service</li>
                </Link>
            </ul>
            {
                isUser ?
                    <h2 className='text-xl font-bold'>{isUser}</h2> :
                    <div className="flex gap-4">

                        <button className="p-2 px-4 rounded-md bg-blue-500"

                        // onClick={() => setIsUser("Ramananda")}

                        >sign in</button>
                        <Link to='/register'>
                            <button className="p-2 px-4 rounded-md bg-lime-500">sign up</button>
                        </Link>
                    </div>
            }
        </nav>
    )
}

export default Navbar