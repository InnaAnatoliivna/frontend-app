import React from 'react';
import styled from '@emotion/styled';
import SearchInput from '../SearchInput/SearchInput';
import LocationSelect from '../LocationSelect/LocationSelect';
import JobTypeList from '../JobTypeList/JobTypeList';
import MultipleSelectChip from '../Multiselect/Multiselect';

const Panel = styled.div`
    height: 100px;
    display: flex;
    gap: 12px;
    padding: 20px 16px 12px 16px ;
`
const FiltersPanel = () => {
    return (
        <Panel>
            <SearchInput />
            <LocationSelect>Content</LocationSelect>
            <JobTypeList />
            <MultipleSelectChip />
        </Panel>
    )
}

export default FiltersPanel