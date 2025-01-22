export type Module = {
	modulePath: string
	moduleSourceCode: string
	// Unused
	moduleEmbeddings?: number[]
	moduleSummary?: string
}

export type ExternalModule = {
	modulePath: string
}
