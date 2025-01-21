import type {
	ExtendPagedQuery,
	MakeOptional,
	PagedQuery,
} from "../../../common"
import type { MiniUser } from "../../../common/users"
import type { User } from "@prisma/client"

export type CreateUserBody = Omit<User, "userOrgId" | "userId" | "userVerified">

export type CreateUserResponse = { userData: MiniUser }

export type GetUsersQuery = PagedQuery

export type GetUsersResponse = {
	orgUsers: MiniUser[]
}

export type SearchUsersQuery = ExtendPagedQuery<
	MakeOptional<{
		searchQuery: string
	}>
>

export type SearchUsersResponse = {
	orgUsers: MiniUser[]
}
