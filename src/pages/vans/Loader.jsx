
import { getVans } from "./API";

export async function loader() {
    const data = await getVans();
    return data; 
}
