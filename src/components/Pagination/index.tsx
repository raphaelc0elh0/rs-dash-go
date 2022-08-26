import { Box, Stack } from "@chakra-ui/react"
import { PaginationItem } from "./PaginationItem"

export const Pagination = () => {
  return (
    <Stack direction={["column", "row"]} mt="8" spacing="6" justify="space-between" align="center">
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> registros
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        {Array.from({ length: 4 }).map((el, idx) => (
          <PaginationItem key={idx} number={idx + 2} />
        ))}
      </Stack>
    </Stack>
  )
}
