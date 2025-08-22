// hostVansLoader.js
import { getHostVans } from "../vans/API"

export function loader() {
  return getHostVans()   // all vans for the host
}
