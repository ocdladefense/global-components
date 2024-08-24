/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';
import logo_ocdla from './images/logo_ocdla.png';

export default function Logo({ type }) {
    // Default = 'footer'
    const li = type === 'navbar' ? 'size-full' : '';
    const a = type === 'navbar' ? 'flex p-4' : '';

    return (
        <li class={li}>
            <a
                class={a}
                href='/'>
                <img
                    class='h-16'
                    src={logo_ocdla}
                />
            </a>
        </li>
    );
}
