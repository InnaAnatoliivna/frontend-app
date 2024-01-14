
import React from 'react';
import { List, Title } from './OffersList.styled';
import { useTheme } from '@emotion/react';


const OffersList = ({ children }) => {
    const theme = useTheme();

    return (

        <List theme={theme}>
            <Title>Wszystkie oferty</Title>
            {children}
        </List>
    )
}

export default OffersList