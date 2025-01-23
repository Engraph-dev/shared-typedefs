import type { ProjectId } from "../.."
import type { PagedQuery } from "../../../../../common"
import type { ProjectTeamAccess, Team } from "@prisma/client"

export type GetProjectTeamsParams = ProjectId
export type GetProjectTeamsQuery = PagedQuery
export type GetProjectTeamsResponse = {
	projectTeams: (ProjectTeamAccess & {
		linkedTeam: Team
	})[]
}
