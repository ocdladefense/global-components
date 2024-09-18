/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ className, src }) {
    // Default = 'footer'
    className = className || "flex px-4";

    return (
        <a
            class={className}
            href='/'>
            <img
                src={src}
            />
        </a>
    );
}
