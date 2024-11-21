import type { CreateProjectBody, ProjectId } from ".."
import type { MakeOptional } from "../../../../common"

export type UpdateProjectParams = ProjectId
export type UpdateProjectBody = MakeOptional<CreateProjectBody>

export type DeleteProjectParams = ProjectId
