import React, { useEffect, useState } from 'react';
import { fetchAllJobs } from '@/redux/jobs/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format, parseISO } from 'date-fns';


const OffersListItems = () => {

    const dispatch = useDispatch();
    const jobsListSelector = useSelector(selectJobs);
    console.log(jobsListSelector);
    // const [jobsList, setJobsList] = useState(null);

    useEffect(() => {

        const getData = async () => {
            try {
                const data = await dispatch(fetchAllJobs())
                console.log(data)

            } catch (error) {
                console.error('Error fetching Jobs :', error)
            }
        }
        getData()
    }, [])

    return (
        <>
            {
                jobsListSelector &&
                jobsListSelector.map(job => {
                    const createDateObject = parseISO(job.createdDate);
                    const dateObject = parseISO(job.date);

                    const createdDate = format(createDateObject, 'dd.MM.yyyy');
                    const date = format(dateObject, 'dd.MM.yyyy');

                    return (
                        <li key={job.id}>
                            <a>
                                {/* avatar ??????? */}
                                <h3>{job.title}</h3>
                                <p><LocationOnIcon /><span>{job.address.city}</span></p>
                                <span>Added: {createdDate}</span>
                                <span>{date}</span>

                            </a>
                        </li>
                    )
                })
            }
        </>
    )
}

export default OffersListItems

// - Lista(avatar, tytuł, lokalizacja, kiedy dodano, data, czy faktura vat)