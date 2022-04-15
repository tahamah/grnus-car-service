import React from 'react'
import useServicesData from '../../hooks/useServicesData'
import Service from '../Service/Service'

const Home = () => {
    const services = useServicesData()
    return (
        <div
            className=" relative
        items-center
        w-full
        px-5
        py-12
        mx-auto
        md:px-12
        lg:px-24
        max-w-7xl"
        >
            <div className="grid w-full grid-cols-1 md:grid-cols-2  gap-12 mx-auto lg:grid-cols-3">
                {services.map((service) => (
                    <Service key={service.id} service={service}></Service>
                ))}
            </div>
        </div>
    )
}

export default Home
