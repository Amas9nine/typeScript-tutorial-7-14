type ButtonProps = {
  handClick: () => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={() => {
        props.handClick()
      }}></button>
    </div>
  )
}
