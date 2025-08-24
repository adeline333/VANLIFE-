// hostVansLoader.js
import { getHostVans } from "../vans/API"
import { requireAuth } from "../../utils"

export async function loader({request}) {
    await requireAuth(request)
  return getHostVans()   
}
