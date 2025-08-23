// import React from 'react'
// import {useRouteError} from "react-router-dom"
// export default function Error() {
//   const error= useRouteError()
//   console.log(error)

//   return(
//     <>
//    <h1>{error.message}</h1>
//    <pre>{error.status} - {error.statusText}</pre>
        
//     </>
//   )
// }
// components/Error.jsx







import React from "react"
import { useRouteError, Link } from "react-router-dom"

export default function Error() {
  const error = useRouteError()
  console.error(error)

  return (
    <div style={{ padding: "2rem" }}>
      <h1>You gotta Login first</h1>
      <p>
        {error.status} {error.statusText}
      </p>
      <p>{error.data?.message || error.message}</p>

      <Link to="/login" style={{ color: "blue", textDecoration: "underline" }}>
        ← Go to Login
      </Link>
    </div>
  )
}
