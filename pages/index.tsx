import { Box, Flex, Heading, Text, Grid, Center, Stack } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import BaseLayout from "../components/BaseLayout";
import SearchBar from "../components/SearchBar";
import { getFiles, getLanguages } from "../lib/github";
import Card from "../components/Card";
import chunk from "lodash.chunk";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Index({ snippets }) {
	const [chunks, setChunks] = useState<string[][]>([]);
	const [currentChunk, setCurrentChunk] = useState<string[]>([]);

	useEffect(() => {
		const chunksData = chunk<string>(
			snippets.sort(() => 0.5 - Math.random()),
			30
		);
		setChunks(chunksData);
		setCurrentChunk(chunksData[0]);
	}, []);

	function paginate(back = false) {
		const currentPageIndex = back ? chunks.indexOf(currentChunk) - 1 : chunks.indexOf(currentChunk) + 1;
		setCurrentChunk(chunks[currentPageIndex] || chunks[back ? chunks.length - 1 : 0]);
	}

	return (
		<BaseLayout pageTitle={"Home"} snippets={snippets}>
			<Heading
				textAlign="center"
				className="gradientText"
				fontSize={{
					base: "30px",
					sm: "60px",
					md: "80px",
					lg: "128px"
				}}
				style={{
					userSelect: "none"
				}}
				mb={2}
			>
				Code Examples
			</Heading>
			<Text textAlign="center">Short code snippets written by our open source community!</Text>
			<Flex justifyContent="center" m={2}>
				<Box w="1200px">
					<SearchBar snippets={snippets} />
				</Box>
			</Flex>
			<Center m={7}>
				<Stack direction="row" spacing={4}>
					<Button leftIcon={<FaArrowLeft />} onClick={() => paginate(true)} colorScheme="teal" variant="solid">
						Back
					</Button>
					<Button onClick={(e) => e.preventDefault()} style={{ cursor: "default" }} colorScheme="teal" variant="outline">
						Page {chunks.indexOf(currentChunk) + 1 || 0} of {chunks.length || 0}
					</Button>
					<Button rightIcon={<FaArrowRight />} onClick={() => paginate(false)} colorScheme="teal" variant="solid">
						Next
					</Button>
				</Stack>
			</Center>
			<Text textAlign={"center"}>
				Total Items: {snippets.length} | Current Page: {currentChunk.length}
			</Text>
			<Center padding={5}>
				<Grid templateColumns="repeat(5, 1fr)" gap={6}>
					{currentChunk.length ? (
						currentChunk.map((m, i) => {
							const fileName = m.split("/");
							fileName.shift();
							return <Card language={m.split("/")[0].trim()} fileName={fileName.map((m) => m.trim()).join("/")} key={i} />;
						})
					) : (
						<Text textAlign={"center"}>Loading data...</Text>
					)}
				</Grid>
			</Center>
		</BaseLayout>
	);
}

export const getStaticProps = async () => {
	const languages = await getLanguages();

	const snippets = [];

	for (let i = 0; i < languages.length; i++) {
		let files = await getFiles(languages[i]);

		files.map((file) => {
			if (file.dir) {
				snippets.push(`${languages[i]} / ${file.file} ISDIR`);
			} else {
				snippets.push(`${languages[i]} / ${file.file}`);
			}
		});
	}

	return {
		props: {
			snippets
		}
	};
};
