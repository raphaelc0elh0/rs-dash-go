import { Button, Flex, Stack } from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../components/Form/Input"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup.string().required("Senha obrigatória")
})

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="Email" error={errors.email} {...register("email")} />
          <Input type="password" label="Senha" error={errors.password} {...register("password")} />
        </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={isSubmitting}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn
