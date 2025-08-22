// vanDetailLoader.js
import { getVans } from "./API";

export function loader({ params }) {
    console.log(params)
    return getVans(params.id)
}