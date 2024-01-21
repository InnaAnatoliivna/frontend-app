import React from 'react';
import { getIconComponentByName, jobType } from '@/utils/filterElements';
import { ButtonStyled, Svg, Wrapper, SvgWrap, TypographyStyled } from './JobTypeList.styled';
import { useTheme } from "@mui/material";
import { getBackgroundColor } from '@/utils/filterHelpers';
import { updateJobTypeFilter } from '@/redux/filters/filtersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobTypeFilter } from '@/redux/filters/selectors';


const JobTypeList = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    // const jobTypeFilter = useSelector(selectJobTypeFilter);
    // console.log(jobTypeFilter)

    const handelClick = type => {
        // console.log(type)
        dispatch(updateJobTypeFilter(type));
    }

    return (
        <Wrapper>
            {jobType.map(item => {
                const backgroundColor = getBackgroundColor(item.representation);

                return (
                    <ButtonStyled
                        type='button'
                        key={item.representation}
                        onClick={() => handelClick(item)}
                    >
                        <SvgWrap style={{ backgroundColor }}>
                            <Svg>{getIconComponentByName(item.iconName)}</Svg>
                        </SvgWrap>
                        <TypographyStyled>{item.name}</TypographyStyled>
                    </ButtonStyled>
                )
            })}
        </Wrapper>
    )
}

export default JobTypeList