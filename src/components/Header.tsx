import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react"
import { RiNotification2Line, RiSearch2Line, RiUser2Line } from "react-icons/ri"
import { Logo } from "./Header/Logo"
import { NotificationsNav } from "./Header/NotificationsNav"
import { Profile } from "./Header/Profile"
import { SearchBox } from "./Header/SearchBox"

export const Header = () => {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" align="center">
      <Logo />
      <SearchBox />
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  )
}
