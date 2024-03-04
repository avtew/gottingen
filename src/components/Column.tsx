type ColPropsType = {
  key: string
  icon:string
  title:string
}

export default function Column(props: ColPropsType) {
  return (
    <div className="flex justify-between items-center gap-2 w-full">
      <span>{props.title}</span>
    </div>
  )
}