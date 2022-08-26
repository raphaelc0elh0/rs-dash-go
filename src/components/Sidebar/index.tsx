import { Box, Stack } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

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
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {sections.map((section) => (
          <NavSection key={section.title} title={section.title}>
            {section.links.map((link) => (
              <NavLink key={link.label} icon={link.icon}>
                {link.label}
              </NavLink>
            ))}
          </NavSection>
        ))}
      </Stack>
    </Box>
  )
}
