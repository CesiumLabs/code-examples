import { NextApiRequest, NextApiResponse } from "next";
import { getFile } from "../../codes/getter";

const searchCode = async(req: NextApiRequest, res : NextApiResponse) => {
    if (req.method === "POST") {
        const body = JSON.parse(req.body)

        const content = getFile(body.lang, body.name)

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