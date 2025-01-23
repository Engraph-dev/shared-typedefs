import type { ProjectId } from "../.."
import type { ProjectUserAccess } from "@prisma/client"

import type { PagedQuery } from "@/util/defs/engraph-backend/common"
import type { MiniUser } from "@/util/defs/engraph-backend/common/users"

export type GetProjectUsersParams = ProjectId
export type GetProjectUsersQuery = PagedQuery
export type GetProjectUsersResponse = {
	projectUsers: (ProjectUserAccess & {
		linkedUser: MiniUser
	})[]
}
