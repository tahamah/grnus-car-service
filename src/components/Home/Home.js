import React from 'react'
import useServicesData from '../../hooks/useServicesData'

const Home = () => {
    const data = useServicesData()
    return (
        <div>
            <p>{data.length}</p>
        </div>
    )
}

export default Home
