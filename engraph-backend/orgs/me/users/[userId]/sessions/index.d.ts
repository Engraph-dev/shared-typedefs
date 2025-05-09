import type { UserId } from ".."
import type { SessionId } from "../../../sessions/me"
import type { Session } from "@prisma/client"

export type GetUserSessionsParams = UserId

export type GetUserSessionsResponse = {
	activeSessions: Omit<Session, "sessionToken" | "userId" | "orgId">[]
}

export type UserIdSessionId = UserId & SessionId

export type CloseUserSessionParams = UserIdSessionId
