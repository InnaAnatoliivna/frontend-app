import React from 'react';
import SharedLayout from '../src/app/components/SharedLayout';
import Container from '@/app/components/Container/Container';
import FiltersPanel from '@/app/components/Filters/FiltersPanel/FiltersPanel';


const Index = () => {

    return (
        <SharedLayout>
            <Container>
                <FiltersPanel />
            </Container>
        </SharedLayout>
    )
}

export default Index