import React from "react"
import Icon from "@mdi/react"
import { mdiCropSquare, mdiClose, mdiMinus } from "@mdi/js"
import styles from "./styles.module.css"

export default function CLIWindow({ children }) {
    return (
        <div className={styles.browserWindow} style={{ maxWidth: "700px" }}>
            <div className={styles.browserWindowHeader}>
                <Icon path={mdiClose} color="#e2e8f080" size={1} rotate={45} />
                <Icon path={mdiMinus} color="#82858980" size={1} style={{ marginLeft: "auto" }} />
                <Icon path={mdiCropSquare} color="#82858980" size={1} style={{ marginLeft: "5px" }} />
                <Icon path={mdiClose} color="#82858980" size={1} style={{ marginLeft: "5px" }} />
            </div>
            <div className={styles.browserWindowBody}>{children}</div>
        </div>
    )
}
