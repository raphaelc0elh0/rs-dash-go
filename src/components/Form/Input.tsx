import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react"
import { FieldError } from "react-hook-form"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

export const Input = ({ name, label, error = undefined, ...rest }: InputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        id={name}
        name={name}
        focusBorderColor="pink.500"
        _hover={{
          bgColor: "gray.900"
        }}
        bgColor="gray.900"
        variant="filled"
        size="lg"
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}
