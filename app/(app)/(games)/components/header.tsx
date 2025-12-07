import { AnimatedThemeToggler } from "@/components/animated-theme-toggler";
import UserDropdown from "@/components/user-dropdown";

export default function Header() {
    return (
        <header className="bg-transparent z-10 fixed top-0 w-full">
            <div className="max-w-4xl mx-auto px-2 py-1 flex items-center text-xl font-bold justify-end">
                <div className="flex items-center gap-2">
                    <AnimatedThemeToggler variant={"outline"} size={"icon"} className="rounded-full" />
                    <UserDropdown />
                </div>
            </div>
        </header>
    )
}
