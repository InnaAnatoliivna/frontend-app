import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import LocationSelect from '../LocationSelect/LocationSelect';
import JobTypeList from '../JobTypeList/JobTypeList';
import MultipleSelectChip from '../Multiselect/Multiselect';
import { Panel } from './FilterPanel.styled';
import LocationContent from '../LocationContent/LocationContent';


const FiltersPanel = () => {
    return (
        <Panel>
            <SearchInput />
            <LocationSelect>
                <LocationContent />
            </LocationSelect>
            <JobTypeList />
            <MultipleSelectChip />
        </Panel>
    )
}

export default FiltersPanel