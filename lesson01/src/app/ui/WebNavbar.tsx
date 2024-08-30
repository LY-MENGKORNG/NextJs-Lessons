import Link from "next/link";
import { WebLayout } from "../lib/placeholder-data";
import SignInBtn from "./btn/SignInBtn";
import AppLogo from "./logo/AppLogo";
import NavProfile from "./profile/NavProfile";

const menuItems: any = [
    {
        id: 1,
        label: "Home",
        href: "/welcome",
    },
    {
        id: 2,
        label: "About",
        href: "/about",
    },
]

export default function WebNavbar() {
    return (
        <div className={`${WebLayout} py-5 flex justify-between backdrop-blur-sm`}>
            <div className="">
                <AppLogo to="/welcome" />
            </div>
            <menu className="flex gap-5 uppercase transition-all">
                {menuItems.map(({ id, label, href }: any) => (
                    <Link className="hover:underline" href={href} key={id}>{label}</Link>
                ))}
            </menu>
            <div className="flex gap-3 items-center">
                <SignInBtn text="Sign in" location="/signin"  />
                <NavProfile />
            </div>
        </div>
    )
}
