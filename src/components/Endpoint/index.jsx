import React from "react"
import styles from "./styles.module.css"
import CodeBlock from "@theme/CodeBlock"

export default function Endpoint({ href, method }) {
    return (
        <div className={styles.main}>
            <div className={styles.method} style={{ color: methodColor(method) }}>
                {method}
            </div>
            <a className={styles.url} style={{ left: urlPadding(method) }} href={href} target="_blank" rel="noopener noreferrer">
                {href}
            </a>
            <CodeBlock>_</CodeBlock>
        </div>
    )
}

function methodColor(method) {
    switch (method) {
        case "GET":
            return "#a896ff"
        case "POST":
            return "#7ecf2b"
        case "PUT":
            return "#ff9a1f"
        case "PATCH":
            return "#f0e137"
        case "DELETE":
            return "#ff5631"

        default:
            break
    }
}

function urlPadding(method) {
    switch (method) {
        case "GET":
            return "70px"
        case "POST":
            return "80px"
        case "PUT":
            return "70px"
        case "PATCH":
            return "90px"
        case "DELETE":
            return "98px"

        default:
            break
    }
}
