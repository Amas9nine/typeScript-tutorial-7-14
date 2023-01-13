import { CSSProperties } from "react"

type StyleProps = {
  style: CSSProperties
}

export const Container = ({ style }: StyleProps) => {
  return (
    <div style={style}>
      Text contetn goes here
    </div>
  )
}
