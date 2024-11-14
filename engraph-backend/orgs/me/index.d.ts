import type { Org } from "@prisma/client"

export type UpdateOrgBody = Pick<Org, "orgName">
