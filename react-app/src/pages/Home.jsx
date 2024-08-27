import React from 'react'
import HeroSection from '../components/home/HeroSection'
import Main from '../components/home/Main'
import Title from '../components/Title'

const Home = () => {
    const head = "This is Heading"
    return (
        <div>
            <Title heading={head} />
            <div className='flex'>
                <HeroSection />
            </div>
            <main>
                <Main />
            </main>
        </div>
    )
}

export default Home