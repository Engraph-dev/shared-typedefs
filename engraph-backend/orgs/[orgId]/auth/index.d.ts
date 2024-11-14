import type { OrgId } from ".."
import type { Session, User } from "@prisma/client"

// Requests
export type LoginCredentialsParams = OrgId

export type LoginCredentialsBody = {
	userMail: User["userMail"]
	userPassword: User["userPassword"]
}

// Responses

export type CredentialsResponse = {
	userData: Pick<User, "userId" | "userOrgId" | "userRole">
	sessionData: {
		sessionId: Session["sessionId"]
		sessionToken: Session["sessionToken"]
	}
}
