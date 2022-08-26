import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue
} from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../context/SidebarDrawerContext"
import { SidebarNav } from "./SidebarNav"

const sections = [
  {
    title: "Geral",
    links: [
      { label: "Dashboard", icon: RiDashboardLine },
      { label: "Usuários", icon: RiContactsLine }
    ]
  },
  {
    title: "Automação",
    links: [
      { label: "Formulários", icon: RiInputMethodLine },
      { label: "Automação", icon: RiGitMergeLine }
    ]
  }
]

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegação</DrawerHeader>
            <DrawerBody>
              <SidebarNav sections={sections} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside" w="64" mr="8">
      <SidebarNav sections={sections} />
    </Box>
  )
}
