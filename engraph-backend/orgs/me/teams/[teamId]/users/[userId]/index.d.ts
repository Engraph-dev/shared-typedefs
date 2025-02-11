import type { TeamId, TeamResponse } from "../../.."
import type { UserId } from "../../../../users/[userId]"

export type AddTeamUserParams = TeamId & UserId
export type DeleteTeamUserParams = TeamId & UserId

export type AddTeamUserResponse = TeamResponse
export type DeleteTeamUserResponse = TeamResponse
