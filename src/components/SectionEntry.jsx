/** @jsx vNode */ /** @jsxFrag "Fragment" */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';




export default function SectionEntry({ text, heading, href, active = false, children }) {
    
    // Determine appropriate classes based on active state.
    let a = active ? 'text-white border-black bg-black' : 'group hover:bg-neutral-100';
    let h1 = active ? '' : 'text-blue-400 group-hover:text-blue-500';
 

    return (
        <li>
            <a class={`flex flex-col gap-2 border-b px-4 py-2 ${a}`} href={href}>
                <h1 class={`font-bold ${h1}`}>{heading}</h1>
                {children}
            </a>
        </li>
    );
}
