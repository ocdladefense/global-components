/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

// defaultLinkStyle
export const linkStyle =
    'hover:underline-blue-500 text-blue-400 hover:opacity-[67.5%] hover:underline hover:underline-offset-2';

// Link
export default function Link({
    classes = linkStyle,
    extraClasses,
    href,
    label
}) {
    return (
        <a
            class={`${classes}${extraClasses ? ` ${extraClasses}` : ''}`}
            href={href || null}>
            {label}
        </a>
    );
}