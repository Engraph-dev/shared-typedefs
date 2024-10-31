import type { Org, User } from "@prisma/client"

export type CreateOrgBody = Pick<Org, "orgName"> &
	Pick<User, "userMail" | "userPassword" | "userFirstName" | "userLastName">

export type GetOrgResponse = {
	orgData: Org
}

export type CheckEmailBody = Pick<User, "userMail">
