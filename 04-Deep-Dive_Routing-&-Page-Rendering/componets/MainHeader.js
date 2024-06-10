import Link from "next/link";
import NavLinks from "./NavLinks";

export default function MainHeader() {
    return (
        <header id="main-header">
            <div id="logo">
                <Link href={"/"}>Next News</Link>
            </div>
            <nav>
                <ul>
                    <NavLinks href="/news" title="News" />
                    <NavLinks href="/archive" title="Archive" />
                </ul>
            </nav>
        </header>
    );
}
