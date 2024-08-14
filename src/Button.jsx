/** @jsx vNode */
/* eslint-disable-next-line no-unused-vars */
import { vNode } from '@ocdla/view';

export default function Button({ href, label }) {
    return (
        <li class='size-full'>
            <a
                class='group flex h-16 items-center p-4'
                href={href}>
                <div class='text-nowrap rounded-md border border-neutral-300 bg-neutral-50 px-4 py-2 text-neutral-500 group-hover:border-neutral-200 group-hover:bg-transparent group-hover:text-neutral-400'>
                    {label}
                </div>
            </a>
        </li>
    );
}
