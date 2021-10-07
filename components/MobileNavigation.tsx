import { Avatar } from "@chakra-ui/avatar";
import Icon from "@chakra-ui/icon";
import { Box, Divider, Flex, HStack, Stack } from "@chakra-ui/layout";
import { Darken } from "../lib/utils";
import { HiViewList } from "react-icons/hi"
import Link from "./SmartLink";
import { useDisclosure } from "@chakra-ui/hooks";
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from "@chakra-ui/modal";
import SearchBar from "./SearchBar";

export default function MobileNavigation() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>

        <Flex
        minH="60px"
        p={2}
        bg={"#202938"}
        justifyContent="center"
        >
            <Avatar name="Code Examples" src="/Logo.png" userSelect="none"/>
            <Box m={2}>
                <SearchBar />
            </Box>
        </Flex>

        </>
    )
}