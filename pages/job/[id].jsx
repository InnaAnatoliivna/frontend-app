import { useRouter } from 'next/router';
import { NextPage } from 'next';

const JobPage = ({ NextPage }) => {
    const { asPath, pathname, query } = useRouter();
    // console.log(asPath)
    // console.log(pathname)
    // console.log(query)

    return (
        <div>JobPage</div>
    )
}

export default JobPage;