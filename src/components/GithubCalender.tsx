"use client";

import { div } from "framer-motion/client";
import { GitHubCalendar } from "react-github-calendar";

export function GitHubCal() {
    return (
        <div>
            <GitHubCalendar username="asakzzz" className="mt-5 mr-3 font-extrabold font-[geist]"></GitHubCalendar>
        </div>

    )
}