/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Base_Element_Link from './Base_Content';
/* eslint-enable */

export default function Navlink({ active, href, label }) {
    return (
        <li class='size-full'>
            <Base_Element_Link
                classes={`${active ? 'font-bold ' : ''} items-center lg:h-16 flex text-nowrap text-neutral-500 hover:opacity-[67.5%] hover:underline hover:underline-offset-2 p-4`}
                href={href}
                label={label}
            />
        </li>
    );
}
