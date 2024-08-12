/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Base_Element_Link from './Base_Content';
/* eslint-enable */

export default function Feedback({ href, label }) {
    return (
        <li class='size-full'>
            <Base_Element_Link
                classes='bg-neutral-50 hover:bg-transparent text-neutral-500 hover:text-neutral-400 border border-neutral-300 hover:border-neutral-200 px-4 py-2 rounded-md'
                href={href}
                label={label}
            />
        </li>
    );
}
