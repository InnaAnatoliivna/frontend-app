import React from 'react';
import { jobType } from '@/utils/filterElements';
import { ButtonStyled, Svg, Wrapper, SvgWrap } from './JobTypeList.styled';
import { useTheme } from "@mui/material";
import styled from "@emotion/styled";
import { getBackgroundColor } from '@/utils/filterHelpers';


const TypographyStyled = styled("p")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "rgba(255,255,255,.80)" : "var(--color-dark)",
    fontSize: "0.875rem",
    // [theme.breakpoints.down("laptop")]: {
    //     display: "none",
    // },
}));


const JobTypeList = () => {
    const theme = useTheme();


    const handelCklick = (jobType) => {
        console.log(jobType)
    }

    return (
        <Wrapper>
            {jobType.map(item => {
                const backgroundColor = getBackgroundColor(item.representation);

                return (
                    <ButtonStyled
                        type='button'
                        key={item.representation}
                        onClick={handelCklick(item)}
                    >
                        <SvgWrap style={{ backgroundColor }}>
                            <Svg>{item.icon}</Svg>
                        </SvgWrap>
                        <TypographyStyled>{item.name}</TypographyStyled>
                    </ButtonStyled>
                )
            })}
        </Wrapper>
    )
}

export default JobTypeList