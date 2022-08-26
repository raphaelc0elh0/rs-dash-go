import { Flex, Icon, Input, HStack, Text, Box, Avatar, useBreakpointValue, IconButton } from "@chakra-ui/react"
import { RiMenuLine, RiNotification2Line, RiSearch2Line, RiUser2Line } from "react-icons/ri"
import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { SearchBox } from "./SearchBox"

export const Header = () => {
  const { onOpen } = useSidebarDrawer()

  const isLargeVersion = useBreakpointValue<boolean>({
    base: false,
    lg: true
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" mt="4" px="6" alignItems="center">
      {!isLargeVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Logo />
      {isLargeVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isLargeVersion} />
      </Flex>
    </Flex>
  )
}
