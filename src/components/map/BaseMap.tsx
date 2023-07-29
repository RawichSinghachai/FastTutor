import React from 'react'
import { LayersControl, MapContainer, TileLayer, useMap } from 'react-leaflet'

export default function BaseMap() {
    return (
        <>
            <LayersControl.BaseLayer name='normal' checked>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name='dark-mode'>
                <TileLayer url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png' />
            </LayersControl.BaseLayer>

        </ >
    )
}
