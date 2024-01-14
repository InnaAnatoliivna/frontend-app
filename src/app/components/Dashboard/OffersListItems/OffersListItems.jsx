import React, { useEffect, useState } from 'react';
import { fetchAllJobs } from '@/redux/jobs/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobs } from '@/redux/jobs/selectors';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { format, parseISO } from 'date-fns';
import ArticleIcon from '@mui/icons-material/Article';
import { Card, LastWrap, MainWrapper } from './OffersListItems.styled';
import { useTheme } from '@emotion/react';


const OffersListItems = () => {
    const theme = useTheme();
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
                    const createdDate = format(createDateObject, 'dd.MM.yyyy');

                    const dateObject = job.date ? parseISO(job.date) : null;
                    const date = dateObject ? format(dateObject, 'dd.MM.yyyy') : null;

                    return (
                        <Card key={job.id} theme={theme}>
                            <a>
                                <MainWrapper>
                                    <div>
                                        {/* avatar ??????? */}
                                        <div><ArticleIcon style={{ fontSize: '60px' }} /></div>
                                    </div>
                                    {/* <ContentWrap> */}
                                    <div>
                                        <h3>{job.title}</h3>
                                        <p><LocationOnIcon /><span>{job.address?.city || ''}</span></p>
                                        {date && <span>{date}</span>}
                                    </div>
                                    <LastWrap>
                                        <span>Dodano: {createdDate}</span>
                                        {job.vatInvoice && <p>Faktura VAT</p>}
                                    </LastWrap>
                                    {/* </ContentWrap> */}
                                </MainWrapper>
                            </a>
                        </Card>
                    )
                })
            }
        </>
    )
}

export default OffersListItems

// - Lista(avatar, tytuł, lokalizacja, kiedy dodano, data, czy faktura vat)