import type { CreateUserBody, CreateUserResponse } from ".."
import type { User } from "@prisma/client"

import type { MakeOptional } from "@/util/defs/engraph-backend/common"

export type UserId = Pick<User, "userId">

export type UpdateUserParams = UserId

export type UpdateUserBody = MakeOptional<
	Omit<CreateUserBody, "userMail"> & Pick<User, "userPassword">
>

export type DeleteUserParams = UserId

export type UpdateUserResponse = CreateUserResponse
