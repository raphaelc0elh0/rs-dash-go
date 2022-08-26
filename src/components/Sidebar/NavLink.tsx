import { Icon, Text, Link, LinkProps as ChackraLinkProps } from "@chakra-ui/react"
import { IconType } from "react-icons"

interface NavLinkProps extends ChackraLinkProps {
  icon: IconType
  children: React.ReactNode
}

export const NavLink = ({ icon, children, ...rest }: NavLinkProps) => {
  return (
    <Link display="flex" alignItems="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  )
}
