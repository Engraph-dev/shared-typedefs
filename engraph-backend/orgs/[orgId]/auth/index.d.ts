import type { OrgId } from ".."
import type { Session, User, UserVerificationToken } from "@prisma/client"

// Requests
export type LoginCredentialsParams = OrgId

export type LoginCredentialsBody = {
	userMail: User["userMail"]
	userPassword: User["userPassword"]
}

export type VerifyTokenBody = {
	tokenId: UserVerificationToken["tokenId"]
	verificationToken: UserVerificationToken["verificationToken"]
}

// Responses

export type CredentialsResponse = {
	userData: Pick<
		User,
		"userId" | "userVerified" | "userEAEnabled" | "userProfileCompleted"
	>
	sessionData: {
		sessionId: Session["sessionId"]
		sessionToken: Session["sessionToken"]
	}
}

export type VerifyEarlyAccessCodeBody = {
	accessCode: string
}

// Highway to the
export type DangerZoneBody = {
	userPassword: string
}

export type LoginOrgUserBody = Pick<User, "userMail" | "userPassword">
