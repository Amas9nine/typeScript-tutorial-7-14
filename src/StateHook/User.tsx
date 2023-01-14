import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [first, setfirst] = useState<AuthUser>({} as AuthUser);

  const handleLog = () => { }
  setfirst({ name: "Vishwas", email: "vivhwas@,ail.sru" })


  return (
    <div>
      <button onClick={handleLog}>log In</button>
      <button>log Out</button>
      <div>User name is{first?.name}</div>
      <div>User email is{first?.email}</div>
    </div>
  )
}
