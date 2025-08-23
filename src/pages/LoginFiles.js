//LoginFiles
import { loginUser } from "./vans/API"
export async function loader({request}) {

    return new URL (request.url).searchParams.get("message")

}
export async function action({request}) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
     const data = await loginUser({ email, password })
    console.log(data)
      localStorage.setItem("loggedin", true)

    return null
}