import Container from '@/app/components/Container/Container';
import DashboardWrap from '@/app/components/Dashboard/DashboardWrap/DashboardWrap';
import FiltersPanel from '@/app/components/Filters/FiltersPanel/FiltersPanel';
import SharedLayout from '@/app/components/SharedLayout';
import React, { useEffect } from 'react';


const Index = () => {
    // const dispatch = useDispatch();
    // const jobsList = useSelector(selectJobs);
    // console.log(jobsList);

    // useEffect(() => {

    //     const detDate = async () => {
    //         try {
    //             const data = await dispatch(fetchAllJobs())
    //             console.log(data)
    //         } catch (error) {
    //             console.error('Error fetching Jobs :', error)
    //         }
    //     }
    //     detDate()
    // }, [])

    return (
        <SharedLayout>
            <Container>
                <FiltersPanel />
                <DashboardWrap />
            </Container>
        </SharedLayout>
    )
}

export default Index