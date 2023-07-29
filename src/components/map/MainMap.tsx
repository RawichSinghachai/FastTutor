import React, { useState, useEffect } from 'react'
import BaseMap from './BaseMap'
import { MapContainer, TileLayer, useMap, Marker, Popup, LayersControl } from 'react-leaflet'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

import Mapbooking from './Mapbooking';

import axios from 'axios';
import Paper from '@mui/material/Paper';


let address: [number, number] = [14.07173633978989, 100.60302089871212]


export default function MainMap() {
    const customIcon = L.icon({
        iconUrl: 'https://i.pinimg.com/236x/b1/a9/ea/b1a9eabaad8d9bd9cdd33593ff7d8098.jpg',
        iconSize: [30, 30], // [width, height]
        iconAnchor: [0, 0], // [x, y] coordinates of the icon anchor point
    });


    const [allBooking, setAllBooking] = useState([
        {
            _id : '',
            topic: '',
            detail: '',
            lat: 0,
            lnt: 0,
            totalpeople: 0,
            nowpeople: 0,
            date:'',
        }
    ])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users/allmap`)
            .then((res) => setAllBooking(res.data))
    }, [])



    return (
        <Paper sx={{ display: 'flex', justifyContent: 'space-around',}} elevation={12}>
            <div >
                <MapContainer style={{ width: '600px', height: '600px', margin: '0 auto' }} center={address} zoom={15} scrollWheelZoom={true}>
                    {/* style={{ width: '100%', height: '100vh', position: 'fixed' }} */}
                    <LayersControl position='topright' >
                        <Marker position={address} icon={customIcon}>
                            <Popup>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <img src="https://i.pinimg.com/236x/cc/09/30/cc0930d6fe3404d982d00d20fec93cb2.jpg"
                                        alt="" height='100px' width='100px'
                                        style={{ padding: '20px' }} />
                                    <h2>พี่พิธา รับติว TU100</h2>
                                </div>
                            </Popup>
                        </Marker>

                        {/* test */}
                        {allBooking ? allBooking.map((data, index) => {
                            return <Marker position={[data.lat, data.lnt]} key={index}>
                                <Popup>
                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ textAlign: 'center' }}>Topic : {data.topic}</h3>
                                        <h3 style={{ textAlign: 'center' }}>detail : {data.detail}</h3>
                                    </div>
                                </Popup>
                            </Marker>
                        }) : <></>}


                        <BaseMap />

                        <LayersControl.Overlay name='Tutor' checked>
                            <Mapbooking />
                        </LayersControl.Overlay>

                    </LayersControl >
                </MapContainer>
            </div>
        </Paper>
    )
}

