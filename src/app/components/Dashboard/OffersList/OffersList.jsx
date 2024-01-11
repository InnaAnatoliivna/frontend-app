
import React from 'react';
import { List } from './OffersList.styled';
import { useTheme } from '@emotion/react';


const OffersList = ({ children }) => {
    const theme = useTheme();

    return (

        <List theme={theme}>Offers List
            {children}
        </List>
    )
}

export default OffersList