import type { ProjectId } from "../../.."
import type { TeamId } from "../../../../teams"
import type { AccessLevel } from "@prisma/client"

export type ProjectIdTeamId = ProjectId & TeamId

export type UpdateProjectTeamParams = ProjectIdTeamId
export type UpdateProjectTeamBody = {
	accessLevel: AccessLevel | null
}
