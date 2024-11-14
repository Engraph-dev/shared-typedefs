import type { OrgId } from "../../[orgId]"
import type { UserVerificationToken } from "@prisma/client"

// Highway to the
export type DangerZoneBody = {
	userPassword: string
}

export type VerifyTokenBody = {
	tokenId: UserVerificationToken["tokenId"]
	verificationToken: UserVerificationToken["verificationToken"]
}

export type VerifyTokenParams = OrgId
