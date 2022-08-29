import { useQuery } from "react-query"
import { api } from "../api"

type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

type GetUsersResponse = { users: User[]; totalCount: number }

const getUsers: (page: number) => Promise<GetUsersResponse> = async (page) => {
  const { data, headers } = await api.get("/users", {
    params: {
      page
    }
  })

  const totalCount = Number(headers["x-total-count"])

  return {
    users: data.users.map((user: User) => ({
      ...user,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      })
    })),
    totalCount
  }
}

export const useUsers = (page: number) => {
  return useQuery(["users", page], () => getUsers(page), {
    staleTime: 1000 * 5
  })
}
