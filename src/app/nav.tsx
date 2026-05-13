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
        name : "Work",
        path : "#work"
    },
    {
        name: "Contact",
        path: "#contact"
    }
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
            <a href="https://github.com/asakzzz/Leo Girard CV-1.pdf" download="filename" className="text-xl text-amber-50/90 font-[geist] mt-5">Download CV here  &lt;---</a>

        </nav>
    )
}