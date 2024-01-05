import SearchInput from '@/app/components/dashboard/SearchInput/SearchInput'
import MainContainer from '../src/app/components/MainContainer'
import React from 'react'
import LocationSelect from '@/app/components/dashboard/LocationSelect/LocationSelect'

const Index = () => {

    return (
        <MainContainer>
            <div>
                <SearchInput />
                <LocationSelect>Content</LocationSelect>
            </div>
        </MainContainer>
    )
}

export default Index