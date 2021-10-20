import { useRouter } from "next/router";
import BaseLayout from "../../../components/BaseLayout";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getContent } from "../../../lib/github";
import { Stack } from "@chakra-ui/layout";
import { FaCopy } from "react-icons/fa";
import { Button, PopoverTrigger, Popover, PopoverContent, PopoverCloseButton, PopoverHeader, PopoverBody } from "@chakra-ui/react";

export default function Snippet({ content }) {
	const router = useRouter();
	const { lang, name } = router.query;
	const md = `\`\`\`${lang || "text"}\n${content || "No content available!"}\n\`\`\``;

	return (
		<BaseLayout pageTitle={`${lang} / ${name}`} padding={false}>
			<Popover>
				<Stack direction={"row"} spacing={4} px={2} py={3}>
					<Button colorScheme="teal" variant="outline">
						{lang}/{name}
					</Button>
					<PopoverTrigger>
						<Button
							onClick={() => {
								if (content) navigator.clipboard.writeText(content).catch(() => {});
							}}
							leftIcon={<FaCopy />}
							colorScheme="teal"
							variant="solid"
						>
							Copy Code
						</Button>
					</PopoverTrigger>
				</Stack>
				<PopoverContent>
					<PopoverCloseButton />
					<PopoverHeader>Success!</PopoverHeader>
					<PopoverBody>Code copied to clipboard.</PopoverBody>
				</PopoverContent>
			</Popover>
			<div style={{ display: "flex", padding: "1rem 0.5rem", backgroundColor: "#2d2d2d" }}>
				<div style={{ userSelect: "none", paddingRight: ".5rem", opacity: 0.7 }}>{content?.length ? content.split("\n").map((_, i) => <div key={i}>{i + 1}</div>) : <div>1</div>}</div>
				<ReactMarkdown
					className="code-area"
					components={{
						code({ node, inline, className, children, ...props }) {
							const match = /language-(\w+)/.exec(className || "");
							return !inline && match ? (
								<SyntaxHighlighter style={tomorrow} language={match[1].toLowerCase()} {...props}>
									{String(children).replace(/\n$/, "")}
								</SyntaxHighlighter>
							) : (
								<code className={className} {...props}>
									{children}
								</code>
							);
						}
					}}
				>
					{md}
				</ReactMarkdown>
			</div>
		</BaseLayout>
	);
}

export const getServerSideProps = async (context) => {
	const { lang, name } = context.params;

	const content = (await getContent(lang, name)) || null;

	return {
		props: {
			content: content?.trim() || null
		}
	};
};
