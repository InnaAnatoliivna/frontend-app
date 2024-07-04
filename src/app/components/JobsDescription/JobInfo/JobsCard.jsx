import React from 'react'
import { JobsWrapper } from './JobsCard.styled'

const JobsCard = ({ jobsDescription, children }) => {


    return (
        <JobsWrapper>
            <>
                {children}
                {/* <h1>{jobsDescription.title}</h1>
                <p>{jobsDescription.description}</p>
                <p>Location: {jobsDescription.address?.city}</p> */}
            </>
        </JobsWrapper>
    )
}

export default JobsCard