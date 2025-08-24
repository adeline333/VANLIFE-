// hostVanDetailLoader.js
import { requireAuth } from "../../utils"
import { getHostVans } from "../vans/API"

export async function loader({ params,request }) {
    await requireAuth(request)
  return getHostVans(params.id)   
}
