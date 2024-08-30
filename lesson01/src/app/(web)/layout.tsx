import WebFooter from "../ui/WebFooter";
import WebNavbar from "../ui/WebNavbar";

export default function layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <WebNavbar />
            <main>
                {children}
            </main>
            <WebFooter />
        </div>
    )
}
