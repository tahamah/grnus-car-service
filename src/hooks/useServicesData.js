import { useEffect, useState } from 'react'

const useServicesData = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('car-data.json')
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [])
    return services
}

export default useServicesData
