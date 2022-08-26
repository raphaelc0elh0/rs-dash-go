import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

export const Profile = () => {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Raphael Coelho</Text>
        <Text color="gray.300" fontSize="small">
          raphael_coelho@hotmail.com.br
        </Text>
      </Box>
      <Avatar size="md" name="Raphael Coelho" src="https://github.com/raphaelc0elh0.png" />
    </Flex>
  )
}
