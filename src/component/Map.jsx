import React from 'react'
import {GoogleMap,LoadScript,Marker} from '@react-google-maps/api'

export const Map = ({data}) => {

    const MayStyle = {
        height: "50vh",
        width:"100%"
    }

    const defaultCentet ={
        lat: data.lat ,lng : data.lng
    }
    return (
        
            <LoadScript googleMapsapiKey = 'AIzaSyCwh1Wf7RE2V6eSXpVOTZgplB3ILBHs9yY'>
                <GoogleMap  
                mapContainerStyle={MayStyle}
              
                zoom={9}
                center={defaultCentet }
                >
                  <Marker position={defaultCentet} /> 
                </GoogleMap>
            </LoadScript>
      
    )
}
 