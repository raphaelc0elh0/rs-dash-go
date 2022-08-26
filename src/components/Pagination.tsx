import { Box, Button, Stack } from "@chakra-ui/react"

export const Pagination = () => {
  return (
    <Stack direction="row" mt="8" spacing="6" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> registros
      </Box>
      <Stack direction="row" spacing="2">
        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          disabled
          _disabled={{
            bg: "pink.500",
            cursor: "default"
          }}
        >
          1
        </Button>
        {Array.from({ length: 4 }).map((el, idx) => (
          <Button
            key={idx}
            size="sm"
            fontSize="xs"
            width="4"
            bg="gray.700"
            _hover={{
              bg: "gray.500"
            }}
          >
            {idx + 2}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
