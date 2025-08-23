// hostVanDetailLoader.js
import { requireAuth } from "../../utils"
import { getHostVans } from "../vans/API"

export async function loader({ params }) {
    await requireAuth()
  return getHostVans(params.id)   
}
