import type { Session, User } from "@prisma/client"

export type SessionId = Pick<Session, "sessionId">

export type EndSessionParams = SessionId

export type GetSessionResponse = {
	sessionData: Omit<Session, "sessionToken" | "sessionIp" | "sessionUA"> & {
		sessionUser: Omit<User, "userPassword">
		sessionOrg: Org
	}
}

export type GetActiveSessionsResponse = {
	activeSessions: (Omit<Session, "sessionToken" | "userId" | "orgId"> & {
		currentSession: boolean
	})[]
}
