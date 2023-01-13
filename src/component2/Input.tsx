import { ChangeEvent } from "react"

type InputProps = {
  value: string
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange} />
    </div>
  )
}
