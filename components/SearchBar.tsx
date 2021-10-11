import Icon from "@chakra-ui/icon";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, Link, Text } from "@chakra-ui/layout";
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from "@chakra-ui/popover";
import _ from "lodash";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Darken } from "../lib/utils";

const SearchItem = ({ data }) => {
	const language = data.split(" / ")[0];
	const name: string = data.split(" / ")[1];

	let ghLink;

	if (name.endsWith("ISDIR")) ghLink = `https://github.com/DevSnowflake/code-examples/tree/main/codes/${language}/${name.replace(" ISDIR", "")}`;

	return (
		<Link href={ghLink ?? `/s/${language}/${name}`}>
			<Box p={2} border="1px solid aqua" rounded="md" bg={Darken("brandGray", 1)} my={2}>
				<Text>{data.replace(" ISDIR", "")}</Text>
			</Box>
		</Link>
	);
};

export default function SearchBar({ snippets }) {
	const [options, setOptions] = useState([]);
	const router = useRouter();

	// onChange={async(e) => {
	//     const res = await fetch("/api/search", {
	//         method: "POST",
	//         body: JSON.stringify({
	//             query: e.target.value
	//         })
	//     })

	//     const data = await res.json()

	//     setOptions(data.response)
	// }}

	return (
		<>
			<Popover isOpen={!_.isEmpty(options)} placement="bottom-start" autoFocus={false}>
				<PopoverTrigger>
					<InputGroup>
						<Input
							placeholder="Search..."
							onClick={() => {
								if (!snippets) {
									router.push("/");
								}
							}}
							onChange={(e) => {
								if (e.target.value.length == 0) return setOptions([]);

								const newData = snippets.filter((s) => s.toLowerCase().replace(" ", "").includes(e.target.value.toLowerCase().replace(" ", "")));

								setOptions(newData);
							}}
						/>
						<InputRightElement>
							<Icon as={FaSearch} />
						</InputRightElement>
					</InputGroup>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverBody maxH="500px" overflowY="scroll">
						{options.map((option) => (
							<SearchItem data={option} key={option} />
						))}
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</>
	);
}
