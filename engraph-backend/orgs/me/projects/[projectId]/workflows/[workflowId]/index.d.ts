import type { ProjectIdWorkflowId } from ".."

export type QueryWorkflowParams = ProjectIdWorkflowId

export type GetWorkflowParams = ProjectIdWorkflowId

export type GetWorkflowResponse = {
	workflowData: {
		moduleNodes: any[]
		symbolNodes: any[]
		externalModuleNodes: any[]
		externalSymbolNodes: any[]
		nodeLinks: any[]
	}
}

export type QueryWorkflowBody = {
	userQuery: string
}

export type QueryWorkflowResponse = {
	queryData: {
		execQuery: string
		execContext: string
		chatResponse: string
	}
}
