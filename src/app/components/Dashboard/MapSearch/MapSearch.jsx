import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import { fetchMapFromBase, fetchMapTiles } from '@/redux/mapTiles/operations';
import { useDispatch } from 'react-redux';
import { getBackgroundColor } from '@/utils/filterHelpers';


const MapSearch = ({ jobs }) => {

    const mapContainer = useRef(null);
    const [markers, setMarkers] = useState([]);
    const map = useRef(null);
    const poland = { lng: 19.1451, lat: 51.9194 };
    const [zoom] = useState(5);
    maptilersdk.config.apiKey = process.env.NEXT_PUBLIC_MAPTILER_API_KEY;

    useEffect(() => {
        if (map.current) return; // stops map from initializing more than once

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [poland.lng, poland.lat],
            zoom: zoom
        });
    }, [poland.lng, poland.lat, zoom]); // This effect runs once on mount

    useEffect(() => {
        if (!map.current || !jobs) return;

        // Remove existing markers
        markers.forEach(marker => marker.remove());

        const newMarkers = jobs.map((job, index) => {
            const { address, jobType } = job;

            if (address && address.lon && address.lat) {
                const lng = parseFloat(address.lon);
                const lat = parseFloat(address.lat);

                if (!isNaN(lng) && !isNaN(lat)) {
                    const marker = new maptilersdk.Marker({ color: getBackgroundColor(jobType) })
                        .setLngLat([lng, lat])
                        .addTo(map.current);

                    return marker;
                } else {
                    console.error(`Invalid coordinates for job #${index}:`, { lng, lat });
                    return null;
                }
            } else {
                // console.error(`Missing coordinates in job #${index}:`, job);
                return null;
            }
        }).filter(marker => marker !== null);

        // Update state with new markers
        setMarkers(newMarkers);
    }, [jobs]); // This effect runs when jobs change



    // useEffect(() => {
    //     if (map.current) return; // stops map from intializing more than once

    //     // map.current = new maptilersdk.Map({
    //     //     container: mapContainer.current,
    //     //     style: maptilersdk.MapStyle.STREETS,
    //     //     center: [poland.lng, poland.lat],
    //     //     zoom: zoom
    //     // });

    //     //     new maptilersdk.Marker({ color: "#000" })
    //     //         .setLngLat([139.7525, 35.6846])
    //     //         .addTo(map.current);

    //     jobs?.forEach((job, index) => {
    //         const { address, jobType } = job;

    //         if (address && address.hasOwnProperty('lon') && address.hasOwnProperty('lat')) {
    //             const lng = parseFloat(address.lon);
    //             const lat = parseFloat(address.lat);

    //             if (!isNaN(lng) && !isNaN(lat) && lng && lat) {
    //                 const lngLat = [lng, lat];

    //                 new maptilersdk.Marker({ color: getBackgroundColor(jobType) })
    //                     .setLngLat(lngLat)
    //                     .addTo(map.current);
    //             } else {
    //                 console.error(`Invalid coordinates for job #${index}:`, { lng, lat });
    //             }
    //         } else {
    //             console.error(`Missing coordinates in job #${index}:`, job);
    //         }
    //     });


    // }, [poland.lng, poland.lat, jobs]);

    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

export default MapSearch;