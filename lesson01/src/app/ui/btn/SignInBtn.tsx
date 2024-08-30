import Link from "next/link"

interface Props {
  text: string
  disabled?: boolean
  location: string
}
export default function SignInBtn(props: Props) {
  if (!props.disabled) {
    return (
      <Link href={props.location}>
        <button className={"px-8 py-2 rounded-md ring-1 active:ring-2"}>
          {props.text}
        </button>
      </Link>
    )
  }
  return <span></span>
}
