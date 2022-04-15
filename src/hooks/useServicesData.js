import { useEffect, useState } from 'react'

const useServicesData = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('car-data.json')
            .then((res) => res.json())
            .then((data) => setData(data))
    }, [])
    return data
}

export default useServicesData
