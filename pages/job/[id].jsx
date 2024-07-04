import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';
import SharedLayout from '@/app/components/SharedLayout';
import Container from '@/app/components/Container/Container';
import { fetchAllJobs } from '@/redux/jobs/operations';
import JobsCard from '@/app/components/JobsDescription/JobInfo/JobsCard';
import OffersListItems from '@/app/components/Dashboard/OffersListItems/OffersListItems';
import DescriptionCard from '@/app/components/JobsDescription/DescriptionCard/DescriptionCard';

const JobPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id } = router.query;
    const currentID = Number(id);
    const allJobs = useSelector(selectJobs);
    console.log(allJobs)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const getData = async () => {
            try {
                await dispatch(fetchAllJobs());
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [id, dispatch]);

    const currentJob = allJobs ? allJobs.find((job) => job.id === currentID) : null;
    console.log('current job :', currentJob)

    //loader
    if (loading) {
        return (
            <SharedLayout>
                <Container>
                    <div>Loading...</div>
                </Container>
            </SharedLayout>
        );
    }

    // console.log(asPath)
    // console.log(pathname)
    // console.log(query)

    return (
        <SharedLayout>
            <Container>
                {currentJob ? (
                    <JobsCard jobsDescription={currentJob}>
                        <OffersListItems data={currentJob} />
                        <DescriptionCard data={currentJob} />
                    </JobsCard>
                ) : (
                    <div>Job not found</div>
                )}

            </Container>

        </SharedLayout>

    )
}

export default JobPage;