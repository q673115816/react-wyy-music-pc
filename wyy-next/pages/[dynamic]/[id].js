import { useRouter } from 'next/router'
export default function AboutPage({ dynamic, id }) {
    // const router = useRouter()
    // const {
    //     query: { dynamic, id }
    // } = router
    return (

        <div>
            Data: {dynamic} - {id}
        </div>
    )
}

AboutPage.getInitialProps = ({ query: { dynamic, id } }) => {
    return { dynamic, id }
}