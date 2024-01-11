import React from 'react'
import OffersList from '../OffersList/OffersList'
import OffersListItems from '../OffersListItems/OffersListItems'
// import MapSearch from '../MapSearch/MapSearch'
import { Wrapper } from './DashboardWrap.styled'
import dynamic from 'next/dynamic';
const MapSearch = dynamic(() => import('@/app/components/Dashboard/MapSearch/MapSearch'), { ssr: false });

const DashboardWrap = () => {

    return (
        <Wrapper>
            <OffersList>
                <OffersListItems />
            </OffersList>
            <MapSearch />
        </Wrapper>
    )
}

export default DashboardWrap