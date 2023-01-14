import { useState } from "react"

export const Loggedin = () => {

  const [isLoggedIn, setIsloggedin] = useState(Number)

  return (
    <>
      <button onClick={() => {
        setIsloggedin(1)
      }}>Login</button>

      <button onClick={() => {
        setIsloggedin(0)
      }}>Logout</button>

      <div>User is {isLoggedIn ? "TRUE=1" : "FALSE=0 always"} </div>
    </>
  )
}
