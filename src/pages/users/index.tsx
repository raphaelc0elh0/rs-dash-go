import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { Header } from "../../components/Header"
import { Sidebar } from "../../components/Sidebar"
import { RiAddLine, RiPencilLine } from "react-icons/ri"

const users = [
  { id: "1", name: "Raphael Coelho", email: "raphael_coelho@hotmail.com.br", registeredAt: "04 de fevereiro, 2021" },
  { id: "2", name: "Gabriella Rocha", email: "gabriella@hotmail.com.br", registeredAt: "13 de junho, 2021" },
  { id: "3", name: "Isabella Coelho", email: "isabella@hotmail.com.br", registeredAt: "02 de setembro, 2021" }
]

const UserList = () => {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar novo
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">{user.name}</Text>
                      <Text fontSize="sm" color="gray.300">
                        {user.email}
                      </Text>
                    </Box>
                  </Td>
                  <Td>{user.registeredAt}</Td>
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
export default UserList
