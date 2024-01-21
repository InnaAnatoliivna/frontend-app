import React, { useEffect, useMemo } from 'react';
import dynamic from 'next/dynamic';
import OffersList from '../OffersList/OffersList';
import OffersListItems from '../OffersListItems/OffersListItems';
import { Wrapper } from './DashboardWrap.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';
import { fetchAllJobs } from '@/redux/jobs/operations';
import { selectCityFilter, selectFilteredOffers, selectJobTypeFilter, selectProfessionFilter, selectProvinceFilter, selectTitleFilter } from '@/redux/filters/selectors';
import { updateFilteredOffers } from '@/redux/filters/filtersSlice';
const MapSearch = dynamic(() => import('@/app/components/Dashboard/MapSearch/MapSearch'), { ssr: false });
// import MapSearch from '../MapSearch/MapSearch'

const DashboardWrap = () => {

    const dispatch = useDispatch();
    const jobsList = useSelector(selectJobs);
    // filters  - - > >
    const filteredJobs = useSelector(selectFilteredOffers);
    const titleFilter = useSelector(selectTitleFilter);
    const provinceFilter = useSelector(selectProvinceFilter);
    // console.log('PROVINCE :', provinceFilter); ///////
    const cityFilter = useSelector(selectCityFilter);
    // console.log('CITY :', cityFilter); ///////
    const jobTypeFilter = useSelector(selectJobTypeFilter);
    // console.log('TYPE JOB :', jobTypeFilter); ///////
    const professionFilter = useSelector(selectProfessionFilter);
    // console.log('PROFESSION :', professionFilter); ///////
    // console.log(jobsList);
    console.log('filteredJobs :', filteredJobs);

    // const [filteredJobsList, setFilteredJobsList] = useState(null);


    const filterFunction = useMemo(() => {
        switch (true) {
            case Boolean(titleFilter):
                return (job) => job.title === titleFilter;
            case Boolean(provinceFilter):
                return (job) => job.address.province === provinceFilter.name;
            case Boolean(cityFilter):
                return (job) => job.address.city === cityFilter.name;
            case Boolean(jobTypeFilter):
                return (job) => job.jobType === jobTypeFilter.representation;
            case Boolean(professionFilter):
                return (job) => professionFilter.some((prof) => job.proffesionTypes.includes(prof.value)
                );
            default:
                return () => true;
        }
    }, [titleFilter, provinceFilter, cityFilter, jobTypeFilter, professionFilter]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await dispatch(fetchAllJobs());
                console.log(data);
            } catch (error) {
                console.error('Error fetching Jobs :', error);
            }
        };

        getData();
        // dispatch(updateFilteredOffers(jobsList));
    }, [dispatch]);


    useEffect(() => {
        const filteredData = jobsList?.filter(filterFunction) || [];
        if (filteredData) {
            dispatch(updateFilteredOffers(filteredData));
        };
    }, [dispatch, jobsList, filterFunction, titleFilter, provinceFilter, cityFilter, jobTypeFilter, professionFilter]);


    return (
        <Wrapper>
            <OffersList>
                <OffersListItems
                    data={
                        filteredJobs.length > 0
                            ? filteredJobs
                            : jobsList
                    } />
            </OffersList>
            <MapSearch />
        </Wrapper>
    )
}

export default DashboardWrap



