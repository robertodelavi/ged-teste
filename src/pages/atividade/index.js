import axios from 'axios'
import Link from 'next/link'

const Atividade = ({ result }) => {

    console.log('result: ', result)

    return (
        <>
            <h3>Atividades</h3>
            <p>{JSON.stringify(result)}</p>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Nome</td>
                    </tr>
                </thead>
                <tbody>
                    {result &&
                        result.map(row => (
                            <tr key={row.id}>
                                <td>
                                    <Link href={`http://localhost:3000/atividade/${row.id}`}>{row.id}</Link>
                                </td>
                                <td>{row.name}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </>
    )
}

export default Atividade

export const getServerSideProps = async () => {
    const res = await axios.get('http://localhost:3000/api/atividade/')

    return {
        props: {
            result: res.data
        }
    }
}
