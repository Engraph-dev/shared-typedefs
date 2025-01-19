import type { ProjectId } from "../.."
import type { PagedQuery } from "../../../../../common"
import type { MiniUser } from "../../../../../common/users"
import type { ProjectTeamAccess, ProjectUserAccess, Team } from "@prisma/client"

export type GetProjectTeamsParams = ProjectId
export type GetProjectTeamsQuery = PagedQuery
export type GetProjectTeamsResponse = {
	projectTeams: (ProjectTeamAccess & {
		linkedTeam: Team
	})[]
}

export type GetProjectUsersParams = ProjectId
export type GetProjectUsersQuery = PagedQuery
export type GetProjectUsersResponse = {
	projectUsers: (ProjectUserAccess & {
		linkedUser: MiniUser
	})[]
}
