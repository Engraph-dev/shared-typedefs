import type { ProjectId } from "../.."
import type { Workflow, WorkflowStatus } from "@prisma/client"

import type {
	ExtendPagedQuery,
	MakeOptional,
} from "@/util/defs/engraph-backend/common"

export type WorkflowId = Pick<Workflow, "workflowId">

export type ProjectIdWorkflowId = ProjectId & WorkflowId

export type GetProjectWorkflowsParams = ProjectId
export type GetProjectWorkflowsQuery = ExtendPagedQuery<
	MakeOptional<{ workflowStatus: WorkflowStatus }>
>

export type GetProjectWorkflowsResponse = {
	projectWorkflows: Workflow[]
}

// Workflows are technically immutable, can't "delete" them
