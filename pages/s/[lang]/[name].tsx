import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../../components/BaseLayout";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from "react-markdown";

export default function Snippet() {
    const router = useRouter()
    const [content, setContent] = useState()

    const { lang, name } = router.query

    useEffect(() => {
        if (!content && name && lang) {
            const fetchData = async() => {
                const res = await fetch("/api/getFile", {
                    method: "POST",
                    body: JSON.stringify({
                        lang,
                        name
                    })
                })
    
                const data = await res.json()

                if (!data.response) {
                    router.push("/")
                    return null
                }
    
                setContent(data.response)
            }
    
            fetchData()
        }
    })
    let MD;

    if(lang) {
        MD = `\`\`\`${lang.toLowerCase()}` + `\n${content}\n` + "```"

        console.log(MD)
    }

    return (

        <BaseLayout pageTitle={`${lang} / ${name}`}>
            {MD && (
                <ReactMarkdown components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '')
                        return !inline && match ? (
                        <SyntaxHighlighter
                            style={tomorrow}
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            >
                            {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                        ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                        )
                    }
                    }}>
                    {MD}
                </ReactMarkdown>
            )
            }
        </BaseLayout>
    
    )

}