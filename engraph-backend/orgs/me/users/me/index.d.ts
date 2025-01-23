import type { MakeOptional } from "../../../../common"
import type { User } from "@prisma/client"

export type MyUserResponse = {
	userData: Omit<User, "userPassword">
}

export type UpdateMyUserBody = MakeOptional<
	Pick<User, "userFirstName" | "userLastName" | "userPassword">
>
