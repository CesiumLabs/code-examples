import { NextApiRequest, NextApiResponse } from "next";
import { getAllContent } from "../../codes/getter";

const searchCode = async(req: NextApiRequest, res : NextApiResponse) => {
    if (req.method === "POST") {
        const body = JSON.parse(req.body)

        if (!body.query || body.query == "") {
            return res.status(200).json({
                response: []
            })
        }

        const snippets = getAllContent()

        return res.status(200).json({
            response: snippets.filter((e) => e.toLowerCase().replace(" ", "").includes(body.query.toLowerCase().replace(" ", "")))
        })

    } else {
        return res.status(405).json({
            message: "method not allowed"
        })
    }
}

export default searchCode