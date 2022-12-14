import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from "@chakra-ui/react"
import { forwardRef, ForwardRefRenderFunction } from "react"
import { FieldError } from "react-hook-form"

interface InputProps extends ChakraInputProps {
  name: string
  label?: string
  error?: FieldError
}

const BaseInput: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = undefined, ...rest },
  ref
) => {
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
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Input = forwardRef(BaseInput)
