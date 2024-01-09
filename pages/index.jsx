import React, { useEffect } from 'react';
import SharedLayout from '../src/app/components/SharedLayout';
import Container from '@/app/components/Container/Container';
import FiltersPanel from '@/app/components/Filters/FiltersPanel/FiltersPanel';
import { fetchAllJobs } from '@/redux/jobs/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';


const Index = () => {
    const dispatch = useDispatch();
    const jobsList = useSelector(selectJobs);
    console.log(jobsList);

    useEffect(() => {

        const detDate = async () => {
            try {
                const data = await dispatch(fetchAllJobs())
                console.log(data)
            } catch (error) {
                console.error('Error fetching Jobs :', error)
            }
        }
        detDate()
    }, [])

    return (
        <SharedLayout>
            <Container>
                <FiltersPanel />
            </Container>
        </SharedLayout>
    )
}

export default Index