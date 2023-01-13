type PropsOfHeroice = {
  names: {
    first: string
    last: string
  }[]
}

export const PersonsList = (props: PropsOfHeroice) => {
  return (
    <div>
      {props.names.map(item => {
        return (
          <h2>{item.first} {item.last}</h2>
        )
      })}
    </div>
  )
}
