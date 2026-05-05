import { Gulzar } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import Nav from "./nav";

const jetbrains = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});


export default function Header() {
    return (
        <div>
            <input type="checkbox" id="toggle" className="peer hidden" />

            <header className=" flex items-center h-10 w-full border-b border-gray-500/40">
                <div className="flex flex-1 justify-start">
                    <p className="font-sans text-sm ml-4">Leo Girard</p>
                </div>
                <div className="flex flex-1 justify-center">
                </div>
                <label htmlFor="toggle" className="flex flex-1 justify-end items-center cursor-pointer">
                    <p className="font-sans text-sm mr-7 text-white/60">Click on meeee! →</p>
                    <p className="font-sans text-sm mr-7">Menu</p>
                </label>
            </header>
            <div className=" max-h-0 overflow-hidden transition-all duration-380 ease-in-out peer-checked:max-h-80 peer-checked:border-b border-gray-500/40">
                <p id="Contact" className=" mt-7 font-extrabold font-[geist] text-3xl mb-3">CONTACTS</p>
                <div className="mt-5 mb-7 ml-3.5">
                    <Nav />
                </div>

            </div>
        </div>

    );
};