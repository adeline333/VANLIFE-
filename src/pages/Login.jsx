import React from "react"
import { useLoaderData, 
    useNavigation,
    useNavigate, useActionData,
Form} from "react-router-dom"


export default function Login() {
    //  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [status, setStatus] = React.useState("idle")
   
     const errorMessage = useActionData()
    const message = useLoaderData()
    const navigation=useNavigation()


  const navigate = useNavigate()
const actionData = useActionData()

React.useEffect(() => {
  if (actionData?.success) {
    navigate(actionData.redirectTo) // redirect after successful login
  }
}, [actionData, navigate])
    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
             {message && <h2 className="red">{message}</h2>}
              {errorMessage && <h3 className="red">{errorMessage}</h3>}
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
                disabled={navigation.state==="submitting"}>
                    
                    {navigation.state=="submitting"?"Logging in ": "Log in"}</button>
            </Form>
        </div>
    )

}