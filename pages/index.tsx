import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import BaseLayout from "../components/BaseLayout";
import SearchBar from "../components/SearchBar";

export default function Index() {

  return (
    <BaseLayout pageTitle={"Home"}>
      <Heading textAlign="center" className="gradientText" fontSize={{
        base:"30px",
        sm: "60px",
        md:"80px",
        lg: "128px"
      }} mb={2}>Code Examples</Heading>
      <Text textAlign="center">Short code snippets written by our open source community!</Text>
      <Flex justifyContent="center" m={2}>
        <Box w="1200px">
          <SearchBar />
        </Box>
      </Flex>
    </BaseLayout>
  )
}