import { sql_query } from 'src/configs/mysql'

export default async function handler(req, res) {
    return await getList(req, res)
}

const getList = async (req, res) => {
    const sql = 'SELECT * FROM users'
    const result = await sql_query(sql)

    // const result = [
    //     {
    //         id: 1, 
    //         name: 'atividade 1'
    //     },
    //     {
    //         id: 2, 
    //         name: 'atividade 2'
    //     },
    // ]

    return res.status(200).json(result)
}
