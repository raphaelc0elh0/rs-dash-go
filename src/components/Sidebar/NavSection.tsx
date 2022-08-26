import { Box, Stack, Text } from "@chakra-ui/react"

interface NavSectionProps {
  title: string
  children: React.ReactNode
}

export const NavSection = ({ title, children }: NavSectionProps) => {
  return (
    <Box key={title}>
      <Text fontWeight="bold" color="gray.400" fontSize="small" textTransform="uppercase">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  )
}
