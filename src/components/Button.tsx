type BtnPropsType = {
  type: any
  onClick: any
  title: string
  icon: string
}

export default function Button(props: BtnPropsType) {
  return (
    <div>
      <button className="flex justify-center items-center gap-1 w-32 py-1.5 pr-2 text-sm rounded bg-yellow-300 font-bold text-slate-700 outline-none hover:bg-yellow-400" type={props.type} onClick={props.onClick}>
        <span className="material-symbols-rounded">{props.icon}</span>
        {props.title}
      </button>
    </div>
  )
}