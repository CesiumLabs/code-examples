import { Box, Badge } from "@chakra-ui/react";
import Link from "next/link";

export default function Card({ language = "Text", fileName = "unknown" }) {
	const link = !fileName.endsWith(" ISDIR") ? `/s/${language}/${fileName}` : `https://github.com/DevSnowflake/code-examples/tree/main/codes/${language}/${fileName.replace(" ISDIR", "")}`;
	return (
		<>
			<Link href={link}>
				<Box
					cursor={"pointer"}
					_hover={{
						backgroundColor: "#303c57"
					}}
					maxW="sm"
					borderWidth="1px"
					borderRadius="lg"
					overflow="hidden"
				>
					<Box p="6">
						<Box display="flex" alignItems="baseline">
							<Badge borderRadius="full" px="2" colorScheme="teal">
								{language}
							</Badge>
						</Box>
						<Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
							{fileName.replace(" ISDIR", "")}
						</Box>
					</Box>
				</Box>
			</Link>
		</>
	);
}
