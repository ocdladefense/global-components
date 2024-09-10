/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import SocialItem from "./SocialItem";
/* eslint-enable */

export default function Social({ platforms, handles }) {
    platforms = platforms.replaceAll(" ", "").split(",");
    handles = handles.replaceAll(" ", "").split(",");
    return (
        <ul class="flex items-center gap-1">
            {platforms.map((platform, i) => (
                <SocialItem
                    type={platform}
                    handle={handles[i]}
                />
            ))}
        </ul>
    );
}
