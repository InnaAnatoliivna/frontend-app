import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTheme } from '@emotion/react';
import { StyledButton } from './ClearButton.styled';
import { useDispatch } from 'react-redux';
import { clearAllFilters } from '@/redux/filters/filtersSlice';

const ClearButton = () => {
    const theme = useTheme();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearAllFilters());
        console.log(' Filters have been cleaned ! ! ! ')
    }

    return (
        <StyledButton
            onClick={handleClick}
        >
            <DeleteForeverIcon
                style={{
                    fontSize: '32px',
                    color: theme.palette.mode === "dark" ? 'var(--color-light)' : 'var(--bc-dark)',
                }} />
        </StyledButton>
    )
}

export default ClearButton