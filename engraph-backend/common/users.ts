import type { User } from "@prisma/client"

export type MiniUser = Pick<
	User,
	| "userId"
	| "userMail"
	| "userFirstName"
	| "userLastName"
	| "userRole"
	| "userVerified"
>
