/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import Contact from "./Defaults";
/* eslint-enable */

export default function Contacts({ hrefs, labels, className }) {
    hrefs = hrefs.replaceAll(" ", "").split(",");
    labels = labels.split(",");
    return (
        <ul class={className || "text-neutral-300"}>
            {hrefs.map((href, i) => (
                <li>
                    <Contact href={href}>{labels[i].trim()}</Contact>
                </li>
            ))}
        </ul>
    );
}
