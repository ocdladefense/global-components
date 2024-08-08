/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import { baseStyleLink } from './Base_Content';
/* eslint-enable */

export default function Sidebar_Item({
    sidebarType,
    active,
    href,
    heading,
    label
}) {
    let a;
    let h1;
    let p;

    switch (active) {
        case true:
            a = 'text-white border-black bg-black';
            h1 = '';
            p = 'text-white';
            break;
        case undefined:
        case false:
            a = 'group hover:bg-neutral-100';
            h1 = 'text-blue-400 group-hover:text-blue-500 ';
            p = '';
            break;
    }

    return (
        <li>
            {sidebarType === 'left' ? (
                <a
                    class={`${a} flex flex-col gap-2 border-b px-4 py-2`}
                    href={href}>
                    <h1 class={`${h1}font-bold`}>{heading}</h1>
                    {label ? <p class={p || null}>{label}</p> : <></>}
                </a>
            ) : sidebarType === 'right' ? (
                <a
                    class={`${baseStyleLink} flex border-b px-4 py-2`}
                    href={href}>
                    {label}
                </a>
            ) : (
                <></>
            )}
        </li>
    );
}
