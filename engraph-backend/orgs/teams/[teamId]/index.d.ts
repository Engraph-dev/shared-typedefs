import type { TeamId, TeamResponse } from ".."
import type { MakeOptional } from "../../../common"
import type { Team } from "@prisma/client"

export type UpdateTeamParams = TeamId

export type UpdateTeamBody = MakeOptional<Omit<Team, "teamId" | "teamOrgId">>

export type UpdateTeamResponse = TeamResponse

export type DeleteTeamParams = TeamId

export type GetTeamParams = TeamId

export type GetTeamResponse = TeamResponse
