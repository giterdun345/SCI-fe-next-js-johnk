import AnimatedBeam from "./AnimatedBeam";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
    return (
        <header className="absolute top-0 w-screen" >
            <AnimatedBeam>
                <div className="h-48 bg-transparent dark:bg-transparent flex flex-col items-center justify-center" >
                    <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white">
                        Card Browser
                    </h1>
                    <h2 className="text-xl sm:text-lg font-semibold text-black dark:text-white mt-2">
                        John Ketterer
                    </h2>
                </div>
                <div className="absolute right-10 top-10">
                    <ThemeSwitch />
                </div>
            </AnimatedBeam>
        </header>
    )
}