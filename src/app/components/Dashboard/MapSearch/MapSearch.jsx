import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { fetchMapFromBase, fetchMapTiles } from '@/redux/mapTiles/operations';
import { useDispatch } from 'react-redux';


const MapSearch = ({ jobs }) => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const poland = { lng: 19.1451, lat: 51.9194 };
    const [zoom] = useState(14);
    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

    useEffect(() => {
        if (map.current) return; // stops map from intializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [poland.lng, poland.lat],
            zoom: zoom
        });

        //     new maptilersdk.Marker({ color: "#000" })
        //         .setLngLat([139.7525, 35.6846])
        //         .addTo(map.current);

        jobs?.forEach(job => {
            const { address, jobType } = job;

            // Отримати координати з адреси
            const lngLat = [parseFloat(address.lon), parseFloat(address.lat)];

            // Встановити маркер
            new maptilersdk.Marker({ color: getColorForJobType(jobType) })
                .setLngLat(lngLat)
                .addTo(map.current);
        });
    }, [poland.lng, poland.lat, zoom, jobs]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

export default MapSearch;