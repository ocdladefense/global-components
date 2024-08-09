/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { baseStyleLink } from './Base_Content';
/* eslint-enable */

export default function Sidebar_Item({ href, label, active = false }) {
    // let a = 'group hover:bg-neutral-100';
    // let h = 'text-blue-400 group-hover:text-blue-500 ';
    // let p = '';

    return (
        <li>
            <a
                class={`${baseStyleLink} flex border-b px-4 py-2`}
                href={href}>
                {label}
            </a>
        </li>
    );
}
