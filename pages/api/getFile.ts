import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"
import path from "path"

const searchCode = async(req: NextApiRequest, res : NextApiResponse) => {
    if (req.method === "POST") {
        const body = JSON.parse(req.body)

        const file = () => {
            try {
                return fs.readFileSync(path.join(process.cwd(), 'codes', body.lang, body.name), 'utf-8')
            }
            catch (e) {
                return null
            }
        }

        const content = file()

        return res.status(200).json({
            response: content
        })

    } else {
        return res.status(405).json({
            message: "method not allowed"
        })
    }
}

export default searchCode