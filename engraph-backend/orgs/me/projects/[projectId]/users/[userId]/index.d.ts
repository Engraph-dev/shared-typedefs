import type { ProjectId } from "../../.."
import type { UserId } from "../../../../users/[userId]"
import type { AccessLevel } from "@prisma/client"

export type ProjectIdUserId = ProjectId & UserId

export type UpdateProjectUserParams = ProjectIdUserId
export type UpdateProjectUserBody = {
	accessLevel: AccessLevel | null
}
