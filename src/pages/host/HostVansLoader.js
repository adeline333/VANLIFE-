// hostVansLoader.js
import { getHostVans } from "../vans/API"
import { requireAuth } from "../../utils"

export async function loader() {
    await requireAuth()
  return getHostVans()   
}
