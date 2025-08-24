//LoginFiles
import { redirect, useActionData } from "react-router-dom"
import { loginUser } from "./vans/API"
export async function loader({request}) {

      return new URL(request.url).searchParams.get("message")
}


export async function action({ request }) {
  const formData = await request.formData()
  const email = formData.get("email")
  const password = formData.get("password")
  const redirectTo = new URL(request.url).searchParams.get("redirectTo") || "/host"

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (!res.ok) {
      return { error: data.message || "Login failed" }
    }

    // Save login state
    localStorage.setItem("loggedin", true)
    localStorage.setItem("user", JSON.stringify(data.user))

    // Instead of redirect, return success info
    return { success: true, redirectTo }
  } catch (err) {
    return { error: err.message || "Something went wrong" }
  }
}