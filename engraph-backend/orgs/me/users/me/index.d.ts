import type { UserResponse } from ".."
import type { MakeOptional } from "../../../../common"
import type { User } from "@prisma/client"

export type MyUserResponse = UserResponse
export type UpdateMyUserBody = MakeOptional<
	Pick<User, "userFirstName" | "userLastName" | "userPassword">
>
