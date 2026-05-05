'use client';
import Link from "next/link";

const links = [
    {
        name: "Github",
        path: "https://github.com/asakzzz"
    },
    {
        name: "Linkedin",
        path: "https://www.linkedin.com/in/leo-girard-241832387"
    },
    {
        name: "Contact",
        path: "/contact"
    },
]

// need to change the contact url to make them able to contact me through mail

export default function Nav() {
    return (
        <nav className="flex flex-col gap-3 font-sans">
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className="text-xl text-amber-50/90 font-[geist]">
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}