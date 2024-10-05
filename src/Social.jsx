/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from "@ocdla/view";
import SocialItem from "./SocialItem";
/* eslint-enable */

export default function Social(props) {
    // Remove the extra children from the original props
    delete props.children;
    return (
        <ul class="social flex items-center gap-2">
            {Object.entries(props).map(([platform, handle]) => (
                <SocialItem type={platform} handle={handle} />
            ))}
        </ul>
    );
}
