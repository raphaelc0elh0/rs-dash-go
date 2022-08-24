import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react"
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri"

const links = [
  {
    boxLabel: "Geral",
    boxLinks: [
      { label: "Dashboard", icon: RiDashboardLine },
      { label: "Usuários", icon: RiContactsLine }
    ]
  },
  {
    boxLabel: "Automação",
    boxLinks: [
      { label: "Formulários", icon: RiInputMethodLine },
      { label: "Automação", icon: RiGitMergeLine }
    ]
  }
]

export const Sidebar = () => {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {links.map(({ boxLabel, boxLinks }) => (
          <Box key={boxLabel}>
            <Text fontWeight="bold" color="gray.400" fontSize="small" textTransform="uppercase">
              {boxLabel}
            </Text>
            <Stack spacing="4" mt="8" align="stretch">
              {boxLinks.map(({ label, icon }) => (
                <Link key={label} display="flex" alignItems="center">
                  <Icon as={icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {label}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
