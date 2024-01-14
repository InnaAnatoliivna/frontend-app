import React from 'react'
import { InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { InputStyled } from './SearchInput.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredOffers } from '@/redux/filters/selectors';
import { updateTitleFilter } from '@/redux/filters/filtersSlice';

const SearchInput = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const inputValue = useSelector(selectFilteredOffers);

    const handleSearchInput = e => {
        dispatch(updateTitleFilter(e.target.value.trim()));
    };
    console.log('>>>>>>>>>>>', inputValue)

    return (
        <div>
            <InputStyled
                placeholder='Search'
                variant="outlined"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon style={{ fontSize: '25px' }} />
                    </InputAdornment>
                }
                onInput={handleSearchInput}
            >
            </InputStyled>
        </div>
    )
}

export default SearchInput