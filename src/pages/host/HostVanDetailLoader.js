// hostVanDetailLoader.js
import { getHostVans } from "../vans/API"

export function loader({ params }) {
  return getHostVans(params.id)   // single van for the host
}
