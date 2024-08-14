/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Logo({ type }) {
    // Default = 'footer'
    const li = type === 'navbar' ? 'size-full' : '';
    const a = type === 'navbar' ? 'flex p-4' : '';

    return (
        <li class={li}>
            <a
                class={a}
                href='https://ocdla.org'>
                <img
                    class='h-16'
                    src='https://ocdla.org/wp-content/uploads/2019/10/cropped-ocdla-logo.png'
                />
            </a>
        </li>
    );
}
