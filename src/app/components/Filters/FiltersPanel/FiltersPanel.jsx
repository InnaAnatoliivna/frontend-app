import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import LocationSelect from '../LocationSelect/LocationSelect';
import JobTypeList from '../JobTypeList/JobTypeList';
import MultipleSelectChip from '../Multiselect/Multiselect';
import { Panel } from './FilterPanel.styled';
import ClearButton from '../ClearFiltersButton/ClearButton';


const FiltersPanel = () => {

    return (
        <Panel>
            <SearchInput />
            <LocationSelect />
            <JobTypeList />
            <MultipleSelectChip />
            <ClearButton />
        </Panel>
    )
}

export default FiltersPanel