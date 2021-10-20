import { Avatar } from "@chakra-ui/avatar";
import { Box, Divider, Flex, HStack } from "@chakra-ui/layout";
import SearchBar from "./SearchBar";
import Link from "next/link";

export default function Navigation({ snippets }) {
	return (
		<Flex minH="60px" p={2} bg={"brandGray"} justifyContent="space-between">
			<Box>
				<HStack>
					<Link href="/">
						<Avatar name="Code Examples" style={{ cursor: "pointer" }} src="/Logo.png" userSelect="none" />
					</Link>
					<Divider orientation="vertical" height="50px" bg="silver" />

					<SearchBar snippets={snippets} />
				</HStack>
			</Box>
		</Flex>
	);
}
