import { useEffect, useState } from "react"
import axios from 'axios'


 const Usegoogle = address => {
    const [map,setmap] = useState({})

    const api = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&
key=AIzaSyCwh1Wf7RE2V6eSXpVOTZgplB3ILBHs9yY%27`
    

    useEffect(async () => {
        const response = await axios(api)
        setmap(response.data.results[0  ].geometry.location)
    }, [])

    return map
}

export default Usegoogle
