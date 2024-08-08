/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ href, divClasses, children }) {
    return (
        <a
            class='-m-4 p-4 lg:py-8'
            href={href}>
            <div class={divClasses}>{children}</div>
        </a>
    );
}
