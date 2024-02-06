import React, { useEffect, useMemo, useState } from 'react';
import OffersList from '../OffersList/OffersList';
import OffersListItems from '../OffersListItems/OffersListItems';
import MapSearch from '../MapSearch/MapSearch';
import { Wrapper } from './DashboardWrap.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';
import { fetchAllJobs } from '@/redux/jobs/operations';
import { selectCityFilter, selectJobTypeFilter, selectProfessionFilter, selectProvinceFilter, selectTitleFilter } from '@/redux/filters/selectors';
import { clearFilteredOffers, updateFilteredOffers } from '@/redux/filters/filtersSlice';

const DashboardWrap = () => {
    const dispatch = useDispatch();
    const jobsList = useSelector(selectJobs);
    const [filteredJobList, setFilteredJobList] = useState(null);
    console.log('STATE FILTERED :', filteredJobList) //

    const titleFilter = useSelector(selectTitleFilter);
    const provinceFilter = useSelector(selectProvinceFilter);
    const cityFilter = useSelector(selectCityFilter);
    const jobTypeFilter = useSelector(selectJobTypeFilter);
    const professionFilter = useSelector(selectProfessionFilter);

    const filterFunction = useMemo(() => {
        return (job) => {
            const lowercaseTitleFilter = titleFilter.toLowerCase();
            const lowercaseJobTitle = job.title.toLowerCase();
            if (titleFilter && !lowercaseJobTitle.includes(lowercaseTitleFilter)) return false;
            if (provinceFilter && job.address.province !== provinceFilter.name) return false;
            if (cityFilter && job.address.city !== cityFilter.name) return false;
            if (jobTypeFilter && job.jobType !== jobTypeFilter.representation) return false;
            if (professionFilter && !professionFilter.some(prof => job.proffesionTypes.includes(prof.value))) return false;
            return true;
        };
    }, [titleFilter, provinceFilter, cityFilter, jobTypeFilter, professionFilter]);

    useEffect(() => {
        const getData = async () => {
            try {
                await dispatch(fetchAllJobs());
                setFilteredJobList(null);
            } catch (error) {
                console.error('Error fetching Jobs :', error);
            }
        };

        getData();
    }, [dispatch]);

    useEffect(() => {
        const filteredData = jobsList?.filter(filterFunction) || null;
        setFilteredJobList(filteredData);
    }, [jobsList, filterFunction]);

    useEffect(() => {
        if (!titleFilter && !provinceFilter && !cityFilter && !jobTypeFilter && !professionFilter) {
            dispatch(clearFilteredOffers());
        }
    }, [dispatch, titleFilter, provinceFilter, cityFilter, jobTypeFilter, professionFilter]);

    return (
        <Wrapper>
            <OffersList>
                <OffersListItems
                    data={
                        filteredJobList
                            ? filteredJobList
                            : jobsList
                    } />
                {(filteredJobList && filteredJobList.length === 0) && (<p style={{ textAlign: 'center' }}>Znaleźliśmy 0 ogłoszeń</p>)}
            </OffersList>
            <MapSearch jobs={jobsList} />
        </Wrapper>
    )
}

export default DashboardWrap;


// const filterFunction = useMemo(() => {
//         switch (true) {
//             case Boolean(titleFilter):
//                 return (job) => job.title.includes(titleFilter)
//             // (job) => job.title === titleFilter;
//             case Boolean(provinceFilter):
//                 return (job) => job.address.province === provinceFilter.name;
//             case Boolean(cityFilter):
//                 return (job) => job.address.city === cityFilter.name;
//             case Boolean(jobTypeFilter):
//                 return (job) => job.jobType === jobTypeFilter.representation;
//             case Boolean(professionFilter):
//                 return (job) => professionFilter.some((prof) => job.proffesionTypes.includes(prof.value)
//                 );
//             default:
//                 return () => true;
//         }
//     }, [titleFilter, provinceFilter, cityFilter, jobTypeFilter, professionFilter]);
