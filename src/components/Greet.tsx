
type GreatProps = {
  name: string
  messagesCount?: number
  isLoggedIn: boolean
}

export const Greet = (props: GreatProps) => {
  const { messagesCount = 0 } = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name} ! u have ${messagesCount} unread messages`
          : `Welcome guest`}
      </h2>
    </div>
  )
}
