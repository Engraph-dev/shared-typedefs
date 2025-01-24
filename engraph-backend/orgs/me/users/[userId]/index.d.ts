import type { CreateUserBody, UserResponse } from ".."
import type { MakeOptional } from "../../../../common"
import type { User } from "@prisma/client"

export type UserId = Pick<User, "userId">

export type UpdateUserParams = UserId

export type UpdateUserBody = MakeOptional<
	Omit<CreateUserBody, "userMail"> & Pick<User, "userPassword">
>

export type DeleteUserParams = UserId
export type GetUserParams = UserId

export type UpdateUserResponse = UserResponse

export type GetUserResponse = UserResponse
