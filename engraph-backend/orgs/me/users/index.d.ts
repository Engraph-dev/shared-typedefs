import type { User } from "@prisma/client";
import type { ExtendPagedQuery, MakeOptional, PagedQuery } from "../../../common";
import type { MiniUser } from "../../../common/users";

export type CreateUserBody = Omit<User, "userOrgId" | "userId" | "userVerified">

export type UserResponse = { userData: MiniUser }

export type CreateUserResponse = UserResponse
export type CreateUserResponse = UserResponse

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