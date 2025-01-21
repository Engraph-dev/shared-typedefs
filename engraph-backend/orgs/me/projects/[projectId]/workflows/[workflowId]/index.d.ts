import type { ProjectIdWorkflowId } from ".."

export type QueryWorkflowParams = ProjectIdWorkflowId

export type QueryWorkflowBody = {
	userQuery: string
}

export type QueryWorkflowResponse = {
	queryResponse: string
}
