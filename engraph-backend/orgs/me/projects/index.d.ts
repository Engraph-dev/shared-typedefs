import type { ExtendPagedQuery, MakeOptional } from "../../../common"
import type { AccessLevel, Project } from "@prisma/client"

export type ProjectId = Pick<Project, "projectId">

type GetProjectsOpts = {
	accessLevel: AccessLevel
}

export type GetProjectsQuery = ExtendPagedQuery<MakeOptional<GetProjectsOpts>>

export type GetProjectsResponse = {
	orgProjects: Project[]
}

export type ProjectResponse = {
	projectData: Project
}

export type CreateProjectBody = Omit<Project, "projectId" | "projectOrgId">
