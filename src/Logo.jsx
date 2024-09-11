/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ typeNavbar, src }) {
    // Default = 'footer'
    const li = typeNavbar ? 'size-full' : '';
    const a = typeNavbar ? 'flex px-4' : '';

    return (
        <li class={li}>
            <a
                class={a}
                href='/'>
                <img
                    class='h-16'
                    src={src}
                />
            </a>
        </li>
    );
}
