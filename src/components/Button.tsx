type BtnPropsType = {
  title: string
}

export default function Button(props: BtnPropsType) {
  return (
    <div>
      <button className="w-24 py-1.5 text-sm border rounded bg-red-500 text-white outline-none hover:bg-red-600">{props.title}</button>
    </div>
  )
}