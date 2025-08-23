import React from "react"
import { useLoaderData, 
    useNavigate,
Form} from "react-router-dom"
import { loginUser } from "./vans/API";


export default function Login() {
    //  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)
    const message = useLoaderData()
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => {
                navigate("/host", { replace: true })
            })
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }



    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
             {message && <h2 className="red">{message}</h2>}
              {error && <h3 className="red">{error.message}</h3>}
            <Form
            method="post"
             className="login-form">
                <input
                    name="email"
    
                    type="email"
                    placeholder="Email address"
                    
                />
                <input
                    name="password"

                    type="password"
                    placeholder="Password"
                    
                />
                <button 
                disabled={status==="submitting"}>
                    
                    {status=="submitting"?"Logging in ": "Log in"}</button>
            </Form>
        </div>
    )

}