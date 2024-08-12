/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export const baseStyleLink =
    'hover:underline-blue-500 text-blue-400 hover:opacity-[67.5%] hover:underline hover:underline-offset-2';

export default function BaseElementLink({
    classes = baseStyleLink,
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
