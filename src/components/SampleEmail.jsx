import React from "react"

export default function SampleEmail() {
    //  <span className="no-link">richard.hill@greencloudcomputing.io</span>
    return (
        <div
            style={{
                pointerEvents: "none",
                color: "inherit",
                textDecoration: "none",
                cursor: "default",
            }}
        >
            <style>
                {`.no-link a {
                color: var(--ifm-table-cell-color);
            }`}
            </style>
            <span className="no-link">richard.hill@greencloudcomputing.io</span>
        </div>
    )
}
