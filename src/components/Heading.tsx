type HeadingProps = {
  children: string
  number: number
  btn: () => void
}

export const Heading = ({ children, number, btn }: HeadingProps) => {

  return (
    <h2>{children} {number}
      <button onClick={btn}>PRESS</button>
    </h2>
  )
}
