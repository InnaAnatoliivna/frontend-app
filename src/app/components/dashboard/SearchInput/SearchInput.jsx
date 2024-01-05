import React from 'react'
import { Input, InputAdornment, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

const SearchInput = () => {
    const theme = useTheme();

    return (
        <div>
            <Input
                placeholder='Search'
                sx={{
                    height: '40px',
                    paddingLeft: '20px',
                    paddingRight: '10px',
                    border:
                        theme.palette.mode === "dark"
                            ? '1px solid #454545'
                            : '1px solid rgb(228, 232, 240)',
                    backgroundColor:
                        theme.palette.mode === "dark"
                            ? '#111111'
                            : 'rgb(243, 246, 248)',
                    color:
                        theme.palette.mode === "dark"
                            ? '#E0E0E0'
                            : 'rgb(29, 30, 37)',
                    borderRadius: '50px',
                    '&::after': {
                        content: 'none',
                    },
                    '&::before': {
                        content: 'none',
                    },
                    fontWeight: '600',
                    fontSize: '13px',
                    lineHeight: '1.6'
                }}
                variant="outlined"
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                }
            >
            </Input>
        </div>
    )
}

export default SearchInput