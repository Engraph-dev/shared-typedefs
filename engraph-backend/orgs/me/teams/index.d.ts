import type {
	ExtendPagedQuery,
	MakeOptional,
	PagedQuery,
} from "../../../common"
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

export type TeamsResponse = {
	orgTeams: (Team & {
		userCount: number
		projectCount: number
	})[]
}

export type SearchTeamsQuery = ExtendPagedQuery<
	MakeOptional<{
		searchQuery: string
	}>
>
