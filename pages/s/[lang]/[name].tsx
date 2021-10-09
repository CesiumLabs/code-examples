import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../../components/BaseLayout";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ReactMarkdown from "react-markdown";
import { getContent } from "../../../lib/github";

export default function Snippet({ content }) {
    const router = useRouter()

    const { lang, name } = router.query
    
    let MD;

    if(lang) {
        MD = `\`\`\`${lang.toLowerCase()}` + `\n${content}\n` + "```"
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

export const getServerSideProps = async(context) => {

    const { lang, name } = context.params

    const content = await getContent(lang, name) 

    return {
        props: {
            content
        }
    }
}