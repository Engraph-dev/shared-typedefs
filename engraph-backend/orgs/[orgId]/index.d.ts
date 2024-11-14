import type { Org } from "@prisma/client"

export type OrgId = Pick<Org, "orgId">

export type OrgIdParams = OrgId
