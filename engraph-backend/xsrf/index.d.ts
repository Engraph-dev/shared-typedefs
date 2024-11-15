import type { CrossSiteToken } from "@prisma/client"

export type GetXSRFTokenResponse = {
	xsrfToken: Pick<CrossSiteToken, "tokenHash" | "tokenExpiryTimestamp">
}
