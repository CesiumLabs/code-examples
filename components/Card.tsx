import { Box, Badge } from "@chakra-ui/react";
import Link from "next/link";

export default function Card({ language = "Text", fileName = "unknown" }) {
	return (
		<>
			<Link href={`/s/${language}/${fileName.replace(" ISDIR", "")}`}>
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
