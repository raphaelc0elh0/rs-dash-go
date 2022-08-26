import { Icon, Text, Link as ChakraLink, LinkProps as ChackraLinkProps } from "@chakra-ui/react"
import { IconType } from "react-icons"
import { ActiveLink } from "../ActiveLink"

interface NavLinkProps extends ChackraLinkProps {
  icon: IconType
  children: React.ReactNode
  href: string
}

export const NavLink = ({ icon, href, children, ...rest }: NavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
