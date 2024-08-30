import Link from "next/link";

interface Href {
    to: string;
    disable?: boolean | false;
}
export default function AppLogo(props: Href) {
  return (
    <Link hidden={props.disable} href={props.to}>App Logo</Link>
  )
}
