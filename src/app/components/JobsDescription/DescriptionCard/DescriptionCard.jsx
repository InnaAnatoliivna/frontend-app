import { jobType, proffesionTypesArray } from '@/utils/filterElements'
import React from 'react'
import { Wrapper } from './DescriptionCard.styled'

const DescriptionCard = ({ data }) => {

    const getJobType = jobType.find(type => data.jobType === type.representation)
    const getProffesionType = proffesionTypesArray.filter(type => data.proffesionTypes.includes(type.value)).map(type => type.name);

    return (
        <Wrapper>
            <div>
                <h3>Rodzaj zawodu: {getProffesionType.join(', ')}</h3>
                <h3>Rodzaj pracy: {getJobType.name}</h3>
                <p><strong>Szczególowy adres: </strong>
                    {data.address.street},
                    {data.address.province} województwo,
                    {data.address.city},
                    {data.address.postalCode}
                </p>
                <p><strong>Sąd: </strong>{data.court.name}</p>
                <p><strong>Telefon: </strong>{data.court.phone}</p>
                <p><strong>E-mail: </strong>{data.court.email}</p>
                <p><strong>Faks: </strong>{data.court.fax}</p>
            </div>
        </Wrapper>
    )
}

export default DescriptionCard