import type { CreateProjectBody, ProjectId } from ".."
import type { MakeOptional } from "../../../../common"

export type UpdateProjectParams = ProjectId
export type UpdateProjectBody = MakeOptional<
	Omit<
		CreateProjectBody,
		"projectIdentifier" | "projectSourceType" | "projectBranch"
	>
>

export type DeleteProjectParams = ProjectId
