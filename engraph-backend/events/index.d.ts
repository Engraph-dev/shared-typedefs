import { EventType } from "@prisma/client"

export type RecordEventBody = {
	eventType: EventType
	eventMetadata: any
}
