import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addBooking } from '@/stores/MapBookingStore'
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from 'react-leaflet'
import ShowImg from './ShowImage'


function Mapbooking({}: any) {

    const [location,setLocation] = useState({lat:0,lnt:0})

    const dispatch = useDispatch()

    const map = useMapEvents(
        {
            dblclick: (e) => {
                console.log(e.latlng);
                setLocation({lat:e.latlng.lat,lnt: e.latlng.lng})
                dispatch(addBooking({lat:e.latlng.lat,lnt: e.latlng.lng}))
            },
        }
    )

    
    return (
        <>
            <Marker position={[location.lat, location.lnt]}>
                <Popup>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ textAlign: 'center' }}>Test</h3>
                        <ShowImg />
                    </div>
                </Popup>
            </Marker>

            {/* <Marker position={[15.07173633978989, 100.60302089871212]}>
                <Popup>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2>พี่พิธา รับติว TU100</h2>
                    </div>
                </Popup>
            </Marker> */}

        </>
    )
}

export default Mapbooking