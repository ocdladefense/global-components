/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from "@ocdla/view";

export default function ContentRegion({ cols, gap, children }) {
    return <section class={`gap-x-${gap || "0"} columns-${cols || "1"} mb-8`}>{children}</section>;
}
