import type { CreateProjectBody, ProjectId, ProjectResponse } from ".."
import type { MakeOptional } from "../../../../common"
import type { AccessLevel } from "@prisma/client"

export type UpdateProjectParams = ProjectId
export type UpdateProjectBody = MakeOptional<
	Omit<CreateProjectBody, "projectIdentifier" | "projectSourceType">
>

export type DeleteProjectParams = ProjectId

export type GetProjectParams = ProjectId

export type GetProjectResponse = ProjectResponse & {
	accessLevel: AccessLevel | null
}
