import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
  "skjB6MFfgUAucYmJdPk0s52YAKyeoTxNe6JXq4JvLtfviHVLacD7xI4VnhftpeHBzz4CJCO3IjdFKMwW0XuGIKSjngm8vwL9iHh6msa9QQ3VI54Gmnm2vwvapsk6xOPZDt49goLGMqO6YTTPUMAi0FHHevGd1yGYzi6m1wJQoCxvvdQQ4YGz"
})
