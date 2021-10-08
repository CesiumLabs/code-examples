import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import BaseLayout from "../components/BaseLayout";
import SearchBar from "../components/SearchBar";
import { getFiles, getLanguages } from "../lib/github";

export default function Index({ snippets }) {

  console.log(snippets)

  return (
    <BaseLayout pageTitle={"Home"} snippets={snippets}>
      <Heading textAlign="center" className="gradientText" fontSize={{
        base:"30px",
        sm: "60px",
        md:"80px",
        lg: "128px"
      }} mb={2}>Code Examples</Heading>
      <Text textAlign="center">Short code snippets written by our open source community!</Text>
      <Flex justifyContent="center" m={2}>
        <Box w="1200px">
          <SearchBar snippets={snippets} />
        </Box>
      </Flex>
    </BaseLayout>
  )
}

export const getStaticProps = async() => {
  const languages = await getLanguages()
  
  const snippets = []

  for (let i = 0; i<languages.length; i++) {
    let files = await getFiles(languages[i])

    files.map((file) => {

      if (file.dir) {
        snippets.push(`${languages[i]} / ${file.file} ISDIR`)
      }
      else {
        snippets.push(`${languages[i]} / ${file.file}`)
      }
    })
  }

  return {
    props: {
      snippets
    }
  }

}