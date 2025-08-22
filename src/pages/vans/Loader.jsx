// vansLoader.js
import { getVans } from "./API";

export async function loader() {
    const data = await getVans();
    return data; // this is accessible via useLoaderData()
}
