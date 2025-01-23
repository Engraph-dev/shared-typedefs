import type { ProjectIdWorkflowId } from ".."
import type {
	ExternalModule,
	Module,
} from "../../../../../../../engraph-worker/common/modules"
import type {
	ExternalSymbol,
	Symbol,
} from "../../../../../../../engraph-worker/common/symbols"

export type QueryWorkflowParams = ProjectIdWorkflowId

export type GetWorkflowParams = ProjectIdWorkflowId

export type Node<T extends {} = {}> = {
	elementId: string
	properties: T
}

export type NodeLink = {
	startNodeElementId: Node["elementId"]
	endNodeElementId: Node["elementId"]
	elementId: string
}

export type GetWorkflowResponse = {
	workflowData: {
		moduleNodes: Node<Module>[]
		symbolNodes: Node<Symbol>[]
		externalModuleNodes: Node<ExternalModule>[]
		externalSymbolNodes: Node<ExternalSymbol>[]
		nodeLinks: NodeLink[]
	}
}

export type QueryWorkflowBody = {
	userQuery: string
}

export type QueryWorkflowResponse = {
	queryData: {
		queryResponse: string
		queryContext: string
		chatResponse: string
	}
}
