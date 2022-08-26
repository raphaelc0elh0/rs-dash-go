import { Stack } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { NavLink } from "./NavLink"
import { NavSection } from "./NavSection"

interface SidebarNavProps {
  sections: {
    title: string
    links: {
      label: string
      icon: IconType
    }[]
  }[]
}

export const SidebarNav = ({ sections }: SidebarNavProps) => {
  return (
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
  )
}
