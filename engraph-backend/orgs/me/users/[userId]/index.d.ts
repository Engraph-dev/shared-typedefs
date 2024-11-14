import type { User } from "@prisma/client"

export type UserId = Pick<User, "userId">
