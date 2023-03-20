import React from "react"
import DocCard from "@theme-original/DocCard"

export default function DocCardWrapper(props) {
    React.useEffect(() => {
        let cards = document.querySelectorAll("article section article a h2.text--truncate")
        cards.forEach((title) => {
            title.textContent = title.textContent.replace("📄️", "")
        })
    }, [])

    return (
        <>
            <DocCard {...props} />
        </>
    )
}
