import type { PagedQuery } from "../../../common"
import type { MiniUser } from "../../../common/users"
import type { Team } from "@prisma/client"

export type TeamId = Pick<Team, "teamId">

export type TeamResponse = {
	teamData: Team & {
		teamUsers: MiniUser[]
	}
}

export type CreateTeamBody = Omit<Team, "teamId" | "teamOrgId">

export type CreateTeamResponse = TeamResponse

export type GetTeamsQuery = PagedQuery

export type GetTeamsResponse = {
	orgTeams: (Team & {
		userCount: number
	})[]
}
