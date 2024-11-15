import type { PagedQuery } from "../../../common"
import type { User } from "@prisma/client"

export type CreateUserBody = Omit<User, "userOrgId" | "userId" | "userVerified">

export type CreateUserResponse = { userData: MiniUser }

export type GetUsersQuery = PagedQuery

export type GetUsersResponse = {
	orgUsers: MiniUser[]
}
