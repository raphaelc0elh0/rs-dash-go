import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react"
import { RiNotification2Line, RiSearch2Line, RiUser2Line } from "react-icons/ri"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

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
